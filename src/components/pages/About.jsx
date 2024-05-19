import React from 'react'
import Container from '../layers/Container'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import img_1 from "../../assets/About_img_1.png"
import img_2 from "../../assets/About_img_2.png"
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
const About = () => {
  return (
    <div>
        <Container className="px-3 lg:px-0">
        <HeaderForBreadcrumb text="About" className="px-0"/>
        <div className="flex justify-between items-center flex-wrap gap-y-6">
            <div className='relative'><img className='w-auto' src={img_1} alt="" />
                <ButtonForCartDropdown className="w-[200px] absolute md:h-auto h-10 top-[82.216494845361%] left-1/2 translate-x-[-50%]" text="Our Brands"/>            
            </div>
            <div className='relative'><img className='w-auto' src={img_2} alt="" />
                <ButtonForCartDropdown className="w-[200px] absolute md:h-auto h-10 top-[82.216494845361%] left-1/2 translate-x-[-50%]" text="Our Stores"/>            
            </div>
        </div>
        <h4 className='lg:text-[39px] md:text-3xl sm:text-2xl text-xl lg:leading-[53px] md:leading-9 sm:leading-7 leading-6 text-[#262626]  lg:pt-[128px] md:pt-28 sm:pt-20 pt-16 lg:pb-[118px] md:pb-28 sm:pb-20 pb-16 '>
                Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
        </h4>
        <div className='lg:mb-[131px] md:mb-24 sm:mb-16 mb-12 flex justify-between flex-wrap gap-y-6'>
            <div className="max-w-[506px]">
                <h5 className='font-bold lg:text-[25px] md:text-[20px] sm:text-[18px] text-base text-[#262626]'>Our Vision</h5>
                <p className='lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:text-base sm:text-sm text-xs text-[#767676] md:pt-[11px] sm:pt-[9px] pt-[7px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="max-w-[506px]">
                <h5 className='font-bold lg:text-[25px] md:text-[20px] sm:text-[18px] text-base text-[#262626]'>Our Story</h5>
                <p className='lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:text-base sm:text-sm text-xs text-[#767676] md:pt-[11px] sm:pt-[9px] pt-[7px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className="max-w-[506px]">
                <h5 className='font-bold lg:text-[25px] md:text-[20px] sm:text-[18px] text-base text-[#262626]'>Our Brands</h5>
                <p className='lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:text-base sm:text-sm text-xs text-[#767676] md:pt-[11px] sm:pt-[9px] pt-[7px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default About