import React from 'react'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
const ProductPageTop = () => {
  return (
    <div className="w-full flex justify-between">
    <div className="icon flex items-center gap-5 ">
      <div className='h-9 w-9 border border-[#F0F0F0] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-500 text-[#737373] cursor-pointer' >
        <IoGrid/>
      </div>
      <div className='h-9 w-9 border border-[#F0F0F0] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-500 text-[#737373] cursor-pointer' >
        <FaList/>
      </div>
    </div>
    <div className="right">
      <label htmlFor="" className='font-DM text-base text-[#767676] leading-7 pr-3.5'>Sort by:</label>
      <select name="" id="" className='w-[239px] text-[#767676] px-5 py-1 text-base outline-none border bg-transparent border-[#F0F0F0]  '>
        <option value="Featured">Featured</option>
        <option value="Featured">Featured</option>
        <option value="Featured">Featured</option>
        <option value="Featured">Featured</option>
        <option value="Featured">Featured</option>
      </select>
      <label htmlFor="" className='font-DM text-base text-[#767676] leading-7 pl-10 pr-3.5'>Show:</label>
      <select name="" id="" className='w-[139px] text-[#767676] px-5 py-1 text-base outline-none border bg-transparent border-[#F0F0F0]'>
        <option value="Featured">6</option>
        <option value="Featured">16</option>
        <option value="Featured">26</option>
        <option value="Featured">36</option>
        <option value="Featured">46</option>
      </select>
    </div>
</div>
  )
}

export default ProductPageTop