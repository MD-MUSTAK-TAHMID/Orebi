import React from 'react'
import Heading from './layers/Heading'
import Container from './layers/Container'
import ProductItem from './layers/ProductItem'
import pro5 from '../assets/pro_5.png'
import pro6 from '../assets/pro_6.png'
import pro7 from '../assets/pro_7.png'
import pro8 from '../assets/pro_8.png'

const BeastSeller = () => {
  return (
    <div>
        <Container className="lg:mb-[130px] md:mb-24 sm:mb-16 mb-9">
            <Heading text="Beast Seller" className="mb-12"/>
            <div className='flex justify-center flex-wrap px-3 gap-y-3 sm:gap-x-5 md:gap-x-7 gap-x-3'>
            <ProductItem   text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro5} />
            <ProductItem   text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro6} />
            <ProductItem   text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro7} />
            <ProductItem   text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro8} />
            </div>
        </Container>
    </div>
  )
}

export default BeastSeller