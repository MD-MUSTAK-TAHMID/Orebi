import Container from './layers/Container'
import React from 'react'
import two from "../assets/2.png"
import track from "../assets/track.png"
import Reload from "../assets/Reload.png"
const BanerBottom = () => {
  return (
    <div className='border-b border-[#F0F0F0] md:py-5 py-2 md:px-0 px-3'>
        <Container className="flex items-center md:justify-between justify-center flex-wrap md:gap-0 gap-3">
          <p className='flex items-center md:gap-[17.06px] gap-2'>
            <img className='lg:w-auto w-3' src={two} alt="" />
            <p className='font-DM font-normal text-[#6D6D6D] lg:text-[16px] md:text-sm sm:text-xs text-[10px]'>Two years warranty</p>
          </p>
          <p className='flex items-center md:gap-[15px] gap-2'>
            <img className='lg:w-auto w-3' src={track} alt="" />
            <p className='font-DM font-normal text-[#6D6D6D] lg:text-[16px] md:text-sm sm:text-xs text-[10px]'>Free shipping</p>
          </p>
          <p className='flex items-center md:gap-[15px] gap-2'>
            <img className='lg:w-auto w-3' src={Reload} alt="" />
            <p className='font-DM font-normal text-[#6D6D6D] lg:text-[16px] md:text-sm sm:text-xs text-[10px]'>Return policy in 30 days</p>
          </p>
        </Container>
    </div>
// efetgeff
  )
}

export default BanerBottom