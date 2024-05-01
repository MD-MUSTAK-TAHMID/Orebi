import React from 'react'
import Images from './layers/Images'
import Container from './layers/Container'
import adds from "../assets/Ads_2.jpg"

const Add = () => {
  return (
    <Container className="lg:mb-[128px] md:mb-24 sm:mb-16 mb-9">
        <Images className="object-cover w-full h-full"  src={adds}/>
    </Container>
  )
}

export default Add