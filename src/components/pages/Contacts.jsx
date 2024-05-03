import React from 'react'
import Container from '../layers/Container'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
import ContuctDropdown from '../layers/ContuctDropdown'
import { Link } from 'react-router-dom'
const Contacts = () => {
  return (
    <>
        <Container>
            <HeaderForBreadcrumb/>
            <div className="px-3 lg:px-0">
                <h3 className='lg:text-[39px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-DM text-[#262626] lg:pb-[42px] md:pb-[30px] sm:pb-[20px] pb-[15px]'>
                    Fill up a Form
                </h3>
                <div className="flex flex-col lg:gap-y-[23px] md:gap-y-[18px] sm:gap-y-[14px] gap-y-[10px]">
                    <div className="flex flex-col">
                        <label htmlFor="name" className='lg:text-base sm:text-sm text-xs font-bold font-DM text-[#262626] pb-[10px]'>
                            Name
                        </label>
                        <input className='md:w-[779px] w-auto lg:pb-[17px] md:pb-[15px] sm:pb-[10px] pb-[7px] border-b border-[#F0F0F0] outline-none lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]' type="text" name="" id="name" placeholder='Your name here'/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Email" className='lg:text-base sm:text-sm text-xs font-bold font-DM text-[#262626] pb-[10px]'>
                            Email
                        </label>
                        <input className='md:w-[779px] w-auto lg:pb-[17px] md:pb-[15px] sm:pb-[10px] pb-[7px] border-b border-[#F0F0F0] outline-none lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]' type="email" name="" id="Email" placeholder='Your email here'/>
                    </div>
                    <div className="flex flex-col lg:mb-[30px] md:mb-[23px] sm:mb-[18px] mb-[13px]">
                        <label htmlFor="massege" className='lg:text-base sm:text-sm text-xs font-bold font-DM text-[#262626] pb-[10px]'>
                            Message
                        </label>
                        <textarea name="" id="massege" cols="30" rows="30" placeholder='Your message here' className='md:w-[779px] w-auto lg:h-[105px] md:h-[95px] sm:h-16 h-14 lg:pb-[17px] md:pb-[15px] sm:pb-[10px] pb-[7px] border-b border-[#F0F0F0] outline-none lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]'></textarea>
                    </div>
                </div>
                 <div className="flex justify-center md:inline-block">
                    <Link to="/">
                        <ButtonForCartDropdown text="Post" className="w-[200px] py-3"/>
                    </Link>
                 </div>
            </div>
            <div className='relative lg:px-0 px-3'>
                <iframe className='outline-none lg:h-[572px] md:h-[550px] sm:h-[450px] h-[350px] w-full  lg:my-[140px] md:my-[100px] sm:my-[50px] my-[30px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3975543695287!2d90.38119147396944!3d23.73319858943912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57dd8b19%3A0xd66f294182e721e8!2sDhaka%20New%20Market!5e0!3m2!1sen!2sbd!4v1714729408766!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div>
                    <div className='md:absolute static top-20 left-20 mb-7 md:mb-0'>
                        <ContuctDropdown text="Germany Office"/>
                        <ContuctDropdown text="Slovakia Office"/>
                        <ContuctDropdown text="Lithuania Office"/>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Contacts