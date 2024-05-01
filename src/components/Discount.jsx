import React from 'react'
import Container from './layers/Container'
import Images from './layers/Images'
import ad1 from "../assets/Ad_1.jpg"
import ad2 from "../assets/Ad_2.jpg"
import ad3 from "../assets/Ad_3.jpg"


const Discount = () => {
  return (
    <div className='xl:pt-[174px] xl:pb-[128px] xl:px-0 px-3 py-8'>
        <Container className="flex xl:justify-between justify-center items-center gap-y-3 flex-wrap lg:flex-nowrap lg:gap-x-3 xl:gap-0">
            <div className="left xl:w-[780px] lg:w-auto w-auto  xl:h-[780px] h-auto">
                <Images className="h-fulllg:w-full object-center md:w-full" src={ad1} href=""/>
            </div>
            <div className="left lx:w-[780px] w-auto  xl:h-[780px] h-auto flex flex-col justify-between gap-y-3 xl:gap-y-0">
                <div className="child w-auto xl:h-[370px] h-auto">
                    <Images className="h-full w-full object-contain" src={ad2} href=""/>
                </div>
                <div className="child w-full xl:h-[370px] h-auto ">
                    <Images className="h-full w-full object-contain" src={ad3} href=""/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Discount