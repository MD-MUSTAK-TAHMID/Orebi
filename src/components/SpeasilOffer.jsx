import React from 'react'
import Heading from './layers/Heading'
import Container from './layers/Container'
import ProductItem from './layers/ProductItem'
import pro9 from '../assets/pro_9.png'
import pro10 from '../assets/pro_10.png'
import pro11 from '../assets/pro_11.png'
import pro12 from '../assets/pro_12.png'

const SpeasilOffer = () => {
  return (
    <div>
        <Container className="lg:mb-[130px] md:mb-28 sm:mb-20 mb-16">
            <Heading text="Special Offers" className="mb-12"/>
            <div className='flex justify-center flex-wrap px-3 gap-y-3 sm:gap-x-5 md:gap-x-7 gap-x-3'>
            <ProductItem   text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro9} />
            <ProductItem   text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro10} />
            <ProductItem   text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro11} />
            <ProductItem   text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro12} />
            </div>
        </Container>
    </div>
  )
}

export default SpeasilOffer