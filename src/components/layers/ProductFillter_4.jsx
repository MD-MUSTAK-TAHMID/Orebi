import React, { useState } from 'react'
import ListForCategory from "./ListForCategory"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
const ProductFillter_4 = () => {
  let [show,setshow] = useState(false)
  let [showHeading,setShowHeading] = useState(false)
  let [show2,setshow2] = useState(false)
  return (
    <div className="">
                      <h3 onClick={()=> setShowHeading(!showHeading) } className='cursor-pointer font-DM font-bold lg:text-[20px] md:text-lg sm:text-sm text-xs text-[#262626] mb-[14px] flex justify-between items-center'>Shop by Price
                        <GoTriangleRight className={`${showHeading?"rotate-90":""} transition-all duration-500 cursor-pointer`}/>
                      </h3>
                    {showHeading&&(
                        <ul>
                  <ListForCategory text="$0.00 - $9.99"/>
                  <ListForCategory text="$10.00 - $19.99" />                  
                  <ListForCategory text="$20.00 - $29.99"/>
                  <ListForCategory text="$30.00 - $39.99" />
                  <ListForCategory text="$40.00 - $69.99" />
              </ul>
                    )}
    </div>
  )
}

export default ProductFillter_4