import React, { useState } from 'react'
import Slider from 'react-slick';
import Images from './layers/Images';
import banner_image from "../assets/Banner.png"
const Banner = () => {

  let [active, setActive] = useState(0)
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
          setActive(next) 
        },
        appendDots: dots => (
          <div
          style={{
            position: "absolute",
            left: "9.791666666666667%",
            top: "50%",
                transform: "translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px"}}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={` ${i == active?"font-DM pt-[9px] pb-[8px] pr-[10px] text-[10px] text-[#262626] font-normal border-r-2 border-[#262626]":"font-DM pt-[9px] pb-[8px] pr-[10px] text-[10px] text-transparent font-normal border-r-2 border-white"}`}>
              0{i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
              }
            },
            {
              breakpoint: 600,
              settings: {
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                appendDots: dots => (
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: "15%",
                      transform: "translateX(-50%)"
                    }}
                  >
                    <ul style={{ margin: "0px", display: "flex"}}> {dots} </ul>
                  </div>
                ),
                customPaging: i => (
                  <div className={` ${i == active?"font-DM pt-[9px] px-[8px] pb-[10px] text-[10px] text-[#262626] font-normal border-b-2 border-[#262626] text-center":"font-DM pt-[9px] px-[8px] pb-[10px] text-[10px] text-transparent font-normal border-b-2 border-white text-center"}`}>
                    0{i + 1}
                  </div>
                )
              }
            }
          ],
        };

  return (
    <div>
    <Slider {...settings}>
    <div className="">
        <Images href="/" src={banner_image}/>
    </div>    
    <div className="">
        <Images href="/" src={banner_image}/>
    </div>    
    <div className="">
        <Images href="/" src={banner_image}/>
    </div>
    </Slider>
    </div>
  );
}

export default Banner