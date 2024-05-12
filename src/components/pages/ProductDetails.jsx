import React from 'react'
import Container from '../layers/Container'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import HeadingForPages from '../layers/HeadingForPages'
import Slider from 'react-slick'
import "./ProductsDetails.css"
import image_1 from "../../assets/ProductDetails_1.png"
import image_2 from "../../assets/ProductDetails_2.png"
import image_3 from "../../assets/ProductDetails_3.png"
import image_4 from "../../assets/ProductDetails_4.png"

const ProductDetails = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div className='hello'>
              <ul className='m-0 flex gap-x-4'> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={`hello w-[100px] h-[100px] mb-3 mt-2  border-2 border-[#262626] p-1`} >
              {/* {i + 1} */}
            </div>
          )
      };
  return (
    <>
        <Container>
        <HeaderForBreadcrumb text="Products Details"/>
        <div className="main flex justify-between flex-wrap px-3 lg:px-0">
            <div className="left lg:max-w-[780px] md:max-w-[700px] sm:max-w-[550px] max-w-[338px] mx-auto md:mx-0">
            <Slider {...settings}>
                <div>
                    <img src={image_1}/>
                </div>
                <div>
                    <img src={image_2}/>
                </div>
                <div>
                    <img src={image_3}/>
                </div>                      
            </Slider>
            </div>
            <div className="right max-w-[780px]">
                <HeadingForPages text="Product"/>
                <p></p>
            </div>
        </div>
        </Container>
    </>
  )
}

export default ProductDetails