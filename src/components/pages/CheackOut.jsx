import React from 'react'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import Container from '../layers/Container'
import HeadingForPages from '../layers/HeadingForPages'
import InputFieldText from '../layers/InputFieldText'
import InputFieldDropDown from '../layers/InputFieldDropDown'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
import { Link } from 'react-router-dom'

const CheackOut = () => {
  return (
    <div>
        <Container className="px-3 lg:px-0">
            <HeaderForBreadcrumb text="Checkout" className="!px-0"/>
            <div className="">
            <p className='lg:mb-[119px] md:mb-24 sm:mb-20 mb-16 lg:text-base sm:text-sm text-xs text-[#767676]'>Have a coupon? <span className='text-[#262626] cursor-pointer'>Click here to enter your code</span></p>
            <HeadingForPages text="Billing Details"/>
            <div className="flex flex-col gap-y-6 max-w-[1054px]">
            <div className='flex gap-[40px] md:flex-nowrap flex-wrap'>
                <InputFieldText className="font-bold " classNameMain="!max-w-auto" classNameinput="!pt-[10px] !pb-4" label="First Name *" id="First Name *" palceholder="First Name" type="text"/>
                <InputFieldText className="font-bold " classNameMain="!max-w-auto" classNameinput="!pt-[10px] !pb-4" label="Last Name *" id="Last Name *" palceholder="Last Name" type="text"/>
            </div>
            <div className='flex flex-col gap-y-6 w-full'>
                <InputFieldText className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="Companye Name (optional)" id="Companye Name (optional)" palceholder="Company Name" type="text"/>
                <InputFieldText className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="Last Name *" id="Last Name *" palceholder="Last Name" type="text"/>
                <div className="">
                <InputFieldText className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="Street Address *" id="Street Address *" palceholder="House number and street name" type="text"/>
                <InputFieldText className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="" id="reet Address *" palceholder="Apartment, suite, unit etc. (optional)" type="text"/>
                </div>
                <InputFieldText className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="Town/City *" id="Town/City" palceholder="Town/City" type="text"/>
                <InputFieldDropDown Option1="Please select" Option2="Bangladesh" Option3="India" Option4="Pakistan" Option5="Palestine" className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="County (optional)" id="County" palceholder="County" type="text"/>
                <InputFieldText className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="Post Code *" id="Post Code *" palceholder="Post Code" type="text"/>
                <InputFieldText className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="Phone *" id="Phone *" palceholder="Phone" type="number"/>
                <InputFieldText className="font-bold " classNameMain="!max-w-full" classNameinput="!pt-[10px] !pb-4" label="Email Address *" id="Email" palceholder="Email" type="email"/>
            </div>
            <HeadingForPages className="lg:mt-[119px] md:mt-24 sm:mt-20 mt-16"  text="Billing Details"/>
            <div className="flex flex-col lg:mb-[30px] md:mb-[23px] sm:mb-[18px] mb-[13px] w-full">
                        <label htmlFor="massege" className='lg:text-base sm:text-sm text-xs font-bold font-DM text-[#262626] pb-[10px]'>
                              Other Notes (optional)
                        </label>
                        <textarea name="" id="massege" cols="30" rows="30" placeholder='Notes about your order, e.g. special notes for delivery.' className=' w-full lg:h-[105px] md:h-[95px] sm:h-16 h-14 lg:pb-[17px] md:pb-[15px] sm:pb-[10px] pb-[7px] border-b border-[#F0F0F0] outline-none lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676] lg:mb-[119px] md:mb-24 sm:mb-20 mb-16'></textarea>
                    </div>
                    <HeadingForPages className="lg:pb-12 md:pb-9 sm:pb-7 pb-5"  text="Billing Details"/>
                    <div className="lg:mb-[60px] md:mb-12 sm:mb-9 mb-7">
                      <div className="flex">
                         <h5 className='font-bold lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] border-r-0 md:w-[320px] w-full md:px-5 sm:px-3 px-2'>Product</h5>
                         <p className='lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] md:w-[320px] w-full md:px-5 sm:px-3 px-2'>Total</p>
                      </div>
                      <div className="flex">
                         <h5 className='font-bold lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] border-r-0 md:w-[320px] w-full md:px-5 sm:px-3 px-2'>Product name x 1</h5>
                         <p className='lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] md:w-[320px] w-full md:px-5 sm:px-3 px-2'>389.99 $</p>
                      </div>
                      <div className="flex">
                         <h5 className='font-bold lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] border-r-0 md:w-[320px] w-full md:px-5 sm:px-3 px-2'>Subtotal</h5>
                         <p className='lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] md:w-[320px] w-full md:px-5 sm:px-3 px-2'>389.99 $</p>
                      </div>
                      <div className="flex">
                         <h5 className='font-bold lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] border-r-0 md:w-[320px] w-full md:px-5 sm:px-3 px-2'>Total</h5>
                         <p className='lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:pt-4 sm:pt-3 pt-2 md:pb-4 sm:pb-3 pb-2 border border-[#F0F0F0] md:w-[320px] w-full md:px-5 sm:px-3 px-2'>389.99 $</p>
                      </div>
                    </div>
                    <Link to="/">
                        <ButtonForCartDropdown text="Proceed to Bank" className="w-[200px] lg:mb-[140px] md:mb-[100px] sm:mb-14 mb-10 py-3" />
                    </Link>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default CheackOut