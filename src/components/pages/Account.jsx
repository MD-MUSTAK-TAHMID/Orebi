import React from 'react'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import Container from '../layers/Container'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div>
        <Container className="lg:px-0 px-3">
            <HeaderForBreadcrumb text="My Account" className="px-0"/>
            <div className="flex lg:gap-x-10 md:gap-x-7 sm:gap-x-5 gap-x-4 lg:mb-[140px] md:mb-28 sm:mb-16 mb-12">
                <div className="w-[233px]">
                    <ul className='flex flex-col gap-y-5'>
                        <li className='text-[#767676] lg:text-base sm:text-sm text-xs hover:text-[#262626] hover:font-bold cursor-pointer transition-all duration-300 lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:pb-[21px] md:pb-4 sm:pb-3 mb-2 border-b border-[#F0F0F0]'>
                            Dashboard
                        </li>
                        <li className='text-[#767676] lg:text-base sm:text-sm text-xs hover:text-[#262626] hover:font-bold cursor-pointer transition-all duration-300 lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:pb-[21px] md:pb-4 sm:pb-3 mb-2 border-b border-[#F0F0F0]'>
                            Others
                        </li>
                        <li className='text-[#767676] lg:text-base sm:text-sm text-xs hover:text-[#262626] hover:font-bold cursor-pointer transition-all duration-300 lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:pb-[21px] md:pb-4 sm:pb-3 mb-2 border-b border-[#F0F0F0]'>
                            Donwloads
                        </li>
                        <li className='text-[#767676] lg:text-base sm:text-sm text-xs hover:text-[#262626] hover:font-bold cursor-pointer transition-all duration-300 lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:pb-[21px] md:pb-4 sm:pb-3 mb-2 border-b border-[#F0F0F0]'>
                            Addresses
                        </li>
                        <li className='text-[#767676] lg:text-base sm:text-sm text-xs hover:text-[#262626] hover:font-bold cursor-pointer transition-all duration-300 lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:pb-[21px] md:pb-4 sm:pb-3 mb-2 border-b border-[#F0F0F0]'>
                            Account details
                        </li>
                        <li className='text-[#767676] lg:text-base sm:text-sm text-xs hover:text-[#262626] hover:font-bold cursor-pointer transition-all duration-300 lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:pb-[21px] md:pb-4 sm:pb-3 mb-2 border-b border-[#F0F0F0]'>
                            Logout
                        </li>
                    </ul>
                </div>
                <div className="max-w-[918px]">
                    <p className='lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:pb-[45px] md:pb-9 sm:pb-7 pb-5'>Hello <span className='text-[#262626]'>admin</span>? <span className='text-[#262626] cursor-pointer'><Link>Log out</Link></span>)</p>
                    <p className='lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:pb-[45px] md:pb-9 sm:pb-7 pb-5'>From your account dashboard you can view your <span className='text-[#262626]  cursor-pointer'><Link>recent orders</Link></span>, manage your <span className='text-[#262626] cursor-pointer'><Link>shipping and billing addresses</Link></span>, and <span className='text-[#262626] cursor-pointer'><Link>edit your password and account details</Link></span>.</p>
                </div>
            </div>
        </Container>
   </div>
  )
}

export default Account