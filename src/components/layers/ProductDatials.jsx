import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const ProductDatials = ({text}) => {
    let [show,setshow] = useState(false)
    return (
              <div className="border-b border-[#F0F0F0] bg-white   w-full">
          <div onClick={()=> setshow(!show)} className="relative overflow-hidden">
          <h3 className="flex justify-between items-center relative font-DM lg:text-base sm:text-sm text-xs font-bold text-[#262626] lg:py-[30px] md:py-[23px] sm:py-[18px] py-3">
              {text}
              <>
              <FaPlus className={` transition-all duration-500 bsolute top-1/2 right-0 translate-y-[-50%] ${show ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/>
              <FaMinus className={`absolute top-1/2 right-0 translate-y-[-50%] ${show ?"opacity-100 visible":"opacity-0 invisible"}`}/>
              </>
          </h3>
          {
          <h5 className={`${show?"static pb-[20px]":"absolute translate-x-[-100%]"} transition-all duration-500 lg:text-base sm:text-sm text-xs text-[#767676]`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum perspiciatis esse, dolores dolor consequatur dicta aliquid, animi, eius omnis ipsa vero? Veritatis reiciendis praesentium aliquam dignissimos, temporibus minus eveniet totam?
        </h5>
        }
        
            </div>
          </div>
                
  )
}

export default ProductDatials