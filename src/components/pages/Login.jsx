import React, { useState } from 'react'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import Container from '../layers/Container'
import HeadingForPages from '../layers/HeadingForPages'
import { FaEye, FaEyeLowVision } from 'react-icons/fa6'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
import InputFieldText from '../layers/InputFieldText'
import InputFieldDropDown from '../layers/InputFieldDropDown'
import InputFieldPassword from '../layers/InputFieldPassword'

const Login = () => {
  return (
    <>
        <Container className="">
            <HeaderForBreadcrumb text="Login"/>
            <div className="px-3 lg:px-0 'border-b border-[#F0F0F0]">
                <div className='lg:pb-[62px] md:pb-[52px] sm:pb-[44px] pb-8 border-b border-[#F0F0F0] lg:mb-[57px] md:mb-12 sm:mb-8 mb-6'>
                <p className='max-w-[644px] font-DM lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-5 sm:leading-4 leading-4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>
                </div>
                {/* ============================================================================= */}
            <div className="border-b border-[#F0F0F0] lg:mb-14 md:mb-9 sm:mb-7 mb-5">
            <div className='border-b border-[#F0F0F0] lg:pb-[69px] md:pb-12 sm:pb-10 pb-8 lg:mb-[58px] md:mb-10 sm:mb-8 mb-6'>
                    <HeadingForPages text="Returning Customer"/>
                    <div className="flex flex-wrap gap-x-[39px] gap-y-[24px]">
                    <InputFieldPassword label="Password" id="Password" placeholder="Password"/>
                    <InputFieldPassword classNameforplaceholder="placeholder:font-bold placeholder:text-[30px] placeholder:text-[#767676]" label="Repeat Password" id="Repeat Password" placeholder=". . . . . . ."/>
                    </div>
                </div>
                    <ButtonForCartDropdown text="Log in" className="w-[200px] py-3 lg:mb-[140px] md:mb-25 sm:mb-20 mb-15"/>
            </div>
            </div>
            <div className="px-3 lg:px-0">
                 <HeadingForPages text="New Customer"/>
                 <p className='max-w-[644px] lg:pb-[51px] md:pb-10 sm:pb-7 pb-5 font-DM lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-5 sm:leading-4 leading-4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>
                <ButtonForCartDropdown text="Continue" className="w-[200px] py-3 lg:mb-[140px] md:mb-32 sm:mb-24 mb-20"/>

            </div>
        </Container>
    </>
  )
}

export default Login