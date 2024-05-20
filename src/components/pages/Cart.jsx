import React from 'react'
import Container from '../layers/Container'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import { ImCross } from 'react-icons/im'
import imageForCart from "../../assets/ImageForCart_1.png"
import CountDown from '../layers/CountDown'
import { Link } from 'react-router-dom'
import Box from '../layers/Box'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
const Cart = () => {
  return (
    <div>
        <Container>
            <HeaderForBreadcrumb text="Cart" className="px-0"/>
            <div className="">
              <ul className='lg:py-[32px] md:py-7 sm:py-5 py-4 bg-[#F5F5F3] md:ps-5 ps-3 md:pr-[346px] pr-3 flex justify-between items-center' >
                <li className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold lg:leading-[23px]'>Product</li>
                <li className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold lg:leading-[23px]'>Price</li>
                <li className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold lg:leading-[23px]'>Quantity</li>
                <li className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold lg:leading-[23px]'>Total</li>
              </ul>
            </div>
            <div className="md:ps-5 ps-3 md:pr-[314px] pr-3 lg:py-[32px] md:py-7 sm:py-5 py-4 flex items-center border border-[#F0F0F0]">
              <div className="flex items-center lg:gap-10 md:gap-8 sm:gap-6 gap-4 lg:pr-[120px] md:pr-28 sm:pr-24 pr-16">
              <ImCross />
              <div className="flex items-center lg:gap-5 md:gap-4 sm:gap-3 gap-2">
                <img src={imageForCart} alt="" />
                <h5 className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold lg:leading-[23px]'>Product name</h5>
              </div>
              </div>
              <h3 className='lg:text-[20px] sm:text-base text-sm text-[#262626] font-bold lg:pr-[310px] md:pr-28 sm:pr-24 pr-16'>$44.00</h3>
              <div className="lg:pr-[270px] md:pr-28 sm:pr-24 pr-16"><CountDown/></div>
              <h3 className='lg:text-[20px] sm:text-base text-sm text-[#262626] font-bold'>$44.00</h3>
            </div>
            <div className="flex items-center justify-between md:p-5 p-3 border border-[#F0F0F0] border-t-0 lg:mb-[54px] md:mb-11 sm:mb-9 mb-8">
            <div className="flex lg:gap-[15px] sm:gap-[10px] gap-[7px] items-center ">
             <select name="" id="" className='py-3 px-8 bg-transparent border border-[#F0F0F0] lg:text-base sm:text-sm text-xs text-[#767676] md:w-[255px] w-auto'>
                <option value="SIZE" className='lg:text-base sm:text-sm text-xs text-[#767676]'>SIZE</option>
                <option value="SM" className='lg:text-base sm:text-sm text-xs text-[#767676]'>SM</option>
                <option value="X" className='lg:text-base sm:text-sm text-xs text-[#767676]'>X</option>
                <option value="XL" className='lg:text-base sm:text-sm text-xs text-[#767676]'>XL</option>
                <option value="M" className='lg:text-base sm:text-sm text-xs text-[#767676]'>M</option>
             </select>
            <Link>
              <h6 className='lg:text-sm sm:text-xs text-[10px] font-bold font-DM text-[#262626]'>Apply coupon</h6>
            </Link>
          </div>
            <Link to="/products">
              <h6 className='lg:text-sm sm:text-xs text-[10px] font-bold font-DM text-[#262626]'>Update cart</h6>
            </Link>
            </div>
            <div className="flex flex-col justify-end items-end lg:gap-6 md:gap-4 sm:gap-3 gap-2 lg:mb-[152px] md:mb-32 sm:mb-28 mb-20">
              <h3 className='lg:text-[20px] sm:text-base text-sm text-[#262626] font-bold '>Cart totals</h3>
              <div className="">
              <Box lefttext="Subtotal" righttext="389.99 $"/>
              <Box lefttext="Total" righttext="389.99 $" className="!text-[#262626]"/>
              </div>
              <Link to="/checkout">
              <ButtonForCartDropdown className="md:w-[200px]" text="Proceed to Checkout"/>
              </Link>
            </div>
        </Container>
    </div>
  )
}

export default Cart