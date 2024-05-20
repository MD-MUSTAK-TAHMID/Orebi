import React, { useState } from 'react'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import Container from '../layers/Container'
import HeadingForPages from '../layers/HeadingForPages'
import { FaEye, FaEyeLowVision } from 'react-icons/fa6'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
import InputFieldText from '../layers/InputFieldText'
import InputFieldDropDown from '../layers/InputFieldDropDown'
import InputFieldPassword from '../layers/InputFieldPassword'
import { Link } from 'react-router-dom'

const Singup = () => {
    let [show,setshow] = useState(false)
    let [show2,setshow2] = useState(false)
    let [show3,setshow3] = useState(false)
    let [show4,setshow4] = useState(false)
    let [show5,setshow5] = useState(false)
    let [show6,setshow6] = useState(false)
    let [show7,setshow7] = useState(false)
    let [show8,setshow8] = useState(false)
    let [show9,setshow9] = useState(false)
    let [show10,setshow10] = useState(false)
    let [show11,setshow11] = useState(false)
    let [show12,setshow12] = useState(false)
    let [eye,seteye] = useState(false)
    let [eye2,seteye2] = useState(false)
  return (
    <>
        <Container className="">
            <HeaderForBreadcrumb text="Sign up"/>
            <div className="px-3 lg:px-0">
                <div className='lg:pb-[62px] md:pb-[52px] sm:pb-[44px] pb-8 border-b border-[#F0F0F0] lg:mb-[57px] md:mb-12 sm:mb-8 mb-6'>
                <p className='max-w-[644px] font-DM lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-5 sm:leading-4 leading-4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>
                </div>

                <div className='border-b border-[#F0F0F0] lg:pb-[69px] md:pb-12 sm:pb-10 pb-8 lg:mb-[58px] md:mb-10 sm:mb-8 mb-6'>
                    <HeadingForPages text="Your Personal Details"/>
                    <div className="flex flex-wrap gap-x-[39px] gap-y-[24px]">
                        <InputFieldText label={"First Name"} id={"First Name"} palceholder={"First Name"} type={"text"}/>
                        <InputFieldText label={"Last Name"} id={"Last Name"} palceholder={"Last Name"} type={"text"}/>
                        <InputFieldText label={"Email address"} id={"Email address"} palceholder={"company@domain.com"} type={"Email"}/>
                        <InputFieldText label={"Telephone"} id={"Telephone"} palceholder={"Your phone number"} type={"text"}/>
                    </div>
                </div>
                {/* -======================================================================== */}
                <div className='border-b border-[#F0F0F0] lg:pb-[69px] md:pb-12 sm:pb-10 pb-8 lg:mb-[58px] md:mb-10 sm:mb-8 mb-6'>
                    <HeadingForPages text="New Customer"/>
                    <div className="flex flex-wrap gap-x-[39px] gap-y-[24px]">
                        <InputFieldText label={"Address 1"} id={"Address 1"} palceholder={"4279 Zboncak Port Suite 6212"} type={"text"}/>
                        <InputFieldText label={"Address 2"} id={"Address 2"} palceholder={"—"} type={"text"}/>
                        <InputFieldText label={"City"} id={"City"} palceholder={"Your city"} type={"text"}/>
                        <InputFieldText label={"Post Code"} id={"Post Code"} palceholder={"05228"} type={"text"}/>
                        <InputFieldDropDown label={"Division"} id={"Division"} palceholder={"First Name"} type={"text"} Option1="Slect Your Division" Option2="abcd" Option3="abcd" Option4="abcd" Option5="abcd"/>
                        <InputFieldDropDown label={"District"} id={"District"} palceholder={"First Name"} type={"text"} Option1="Slect Your District" Option2="abcd" Option3="abcd" Option4="abcd" Option5="abcd"/>
                    </div>
                </div>
                {/* ============================================================================= */}
                <div className='border-b border-[#F0F0F0] lg:pb-[69px] md:pb-12 sm:pb-10 pb-8 lg:mb-[58px] md:mb-10 sm:mb-8 mb-6 '>
                    <HeadingForPages text="Your Password"/>
                    <div className="flex flex-wrap gap-x-[39px] gap-y-[24px]">
                    <InputFieldPassword label="Password" id="Password" placeholder="Password"/>
                    <InputFieldPassword label="Repeat Password" id="Repeat Password" placeholder="Repeat Password"/>
                    </div>
                </div>
            </div>
            <div className="px-3 lg:px-0">
            <div className=' flex gap-x-[15px] '>
                <input type="checkbox" />
                <p className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]'>I have read and agree to the Privacy Policy</p>
            </div>
            <div className='flex gap-x-[15px] lg:mb-[27px] md:mb-5 sm:mb-4 mb-3 '>
                <p className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]'>Subscribe Newsletter</p>
                <input name='cheack' id='yes' type="checkbox" />
                <label className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]' htmlFor="yes">Yes</label>
                <input name='cheack' id='no' type="checkbox" />
                <label className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]' htmlFor="no">No</label>
            </div>
                <Link to="/login">
                <ButtonForCartDropdown text="Sign Up" className="w-[200px] py-3 lg:mb-[140px] md:mb-32 sm:mb-24 mb-20"/>
                </Link>
            </div>
        </Container>
    </>
  )
}

export default Singup