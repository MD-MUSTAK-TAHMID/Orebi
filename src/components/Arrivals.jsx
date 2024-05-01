import React from 'react'
import Container from './layers/Container'
import Heading from './layers/Heading'
import ProductItem from './layers/ProductItem'
import pro1 from '../assets/pro_1.png'
import pro2 from '../assets/pro_2.png'
import pro3 from '../assets/pro_3.png'
import pro4 from '../assets/pro_4.png'
import pro5 from '../assets/pro_5.png'
import Slider from 'react-slick'
import { FaLongArrowAltRight } from "react-icons/fa";


const Arrivals = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="lg:w-[64px] md:w-[50px] sm:w-[40px] w-[30px] lg:h-[64px] md:h-[50px] sm:h-[40px] h-[30px] absolute lg:right-5 md:right-3 sm:right-2 right-1 top-1/2 translate-y-[-50%] rounded-full bg-[#c2c2c2] !flex justify-center items-center"
        style={{ ...style,  }}
        onClick={onClick}
      >
        <FaLongArrowAltRight className='text-white'/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="lg:w-[64px] md:w-[50px] sm:w-[40px] w-[30px] lg:h-[64px] md:h-[50px] sm:h-[40px] h-[30px] absolute lg:left-5 md:left-3 sm:left-2 left-1 top-1/2 translate-y-[-50%] rounded-full bg-[#c2c2c2] !flex justify-center items-center z-10 "
        style={{ ...style,  }}
        onClick={onClick}
      >
        <FaLongArrowAltRight className='text-white rotate-180'/>
      </div>
    );
  }
  return (
    <div>
        <Container>
            <Heading className="lg:pb-12 pb-6 sm:pb-8 md:pb-10" text="New Arrivals"/>
        </Container>
        
        <Container className="max-w-[1640px] lg:mb-[128px] sm:mb-20 md:mb-16 px-3 md:px-0">
        <div>
        <div className="slider-container">
      <Slider {...settings}>
        <div>
        <ProductItem  className="mx-auto" text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="10%" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro1} />
        </div>
        <div>
        <ProductItem className="mx-auto" text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro2} />
        </div>
        <div>
        <ProductItem className="mx-auto" text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro3} />
        </div>
        <div>
        <ProductItem className="mx-auto" text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro4} />
        </div>
        <div>
        <ProductItem className="mx-auto" text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="25%" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro5} clas/>
        </div>
      </Slider>
    </div>
        </div>
        </Container>
    </div>
  )
}

export default Arrivals