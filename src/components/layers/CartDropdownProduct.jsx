import React from 'react'
import { ImCross } from "react-icons/im";
import pro_1 from "../../assets/pro_1.png"

const CartDropdownProduct = () => {
  return (
    <div className="p-5 bg-[#F5F5F3] flex items-center">
        <div className="w-20 h-20 bg-[#979797]"><img className='h-full w-full object-contain' src={pro_1} alt="" /></div>
        <div className="text ps-5">
            <h4 className='pb-3 md:text-[14px] text-[11px] font-DM font-bold'>Black Smart Watch</h4>
            <p className='md:text-[14px] text-[11px] font-DM font-bold'>$44.00</p>
        </div>
        <ImCross className='w-[10px] ms-[74px]'/>
    </div>
  )
}

export default CartDropdownProduct