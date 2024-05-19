import React, { useState } from 'react'
import Container from '../layers/Container'
import HeaderForBreadcrumb from '../layers/HeaderForBreadcrumb'
import HeadingForPages from '../layers/HeadingForPages'
import Slider from 'react-slick'
import "./ProductsDetails.css"
import image_1 from "../../assets/ProductDetails_1.png"
import image_2 from "../../assets/ProductDetails_2.png"
import image_3 from "../../assets/ProductDetails_3.png"
import image_4 from "../../assets/ProductDetails_4.png"
import { FaRegStar, FaStar } from 'react-icons/fa'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
import ContuctDropdown from "../layers/ContuctDropdown" 
import ProductDatials from '../layers/ProductDatials'
import InputFieldText from '../layers/InputFieldText'

const ProductDetails = () => {
  let [show,setshow] = useState(true)
  let [text,settext] = useState(1);
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
        <Container className="px-3 lg:px-0">
        <HeaderForBreadcrumb text="Products Details"/>
        <div className="main flex flex-wrap px-3 lg:px-0 justify-between">
            <div className="left pr-3 lg:pr-0 lg:max-w-[780px] md:max-w-[700px] sm:max-w-[550px] max-w-[338px] mx-auto md:mx-0">
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
            <div className="right w-[780px] text-start">
                <HeadingForPages text="Product"/>
                <div className='flex gap-[25px] items-center w-full'>
                  <div className="flex gap-[2px]">
                  <FaStar className='text-[#FFD881] '/>
                  <FaStar className='text-[#FFD881] '/>
                  <FaStar className='text-[#FFD881] '/>
                  <FaStar className='text-[#FFD881] '/>
                  <FaStar className='text-[#FFD881] '/>
                  </div>
                  <p className='lg:text-sm sm:text-xs text-[10px] text-[#767676]'>1 Review</p>
                </div>
                <div className="flex gap-[22px] items-center pb-6 pt-[21px] border-b border-[#D8D8D8] w-full ">
                  <p className='text-[#767676] lg:text-base sm:text-sm text-xs'><s>$88.00</s></p>
                  <p className='text-[#262626] lg:text-[20px] sm:text-base text-sm font-bold'>$44.00</p>
                </div>
                <div className="border-b border-[#F0F0F0] pb-[30px]">
                <div className="flex lg:gap-[53px] md:gap-[30px] sm:gap-[25px] gap-[15px] items-center pt-[29px] ">
          <label htmlFor="" className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold'>COLOR:</label>
          <div className="flex lg:gap-[15px] sm:gap-[10px] gap-[7px] items-center">
            <div className="w-5 h-5 rounded-full bg-[#979797]"></div>
            <div className="w-7 h-7 rounded-full bg-[#FF8686]"></div>
            <div className="w-5 h-5 rounded-full bg-[#7ED321]"></div>
            <div className="w-5 h-5 rounded-full bg-[#B6B6B6]"></div>
            <div className="w-5 h-5 rounded-full bg-[#15CBA5]"></div>
          </div>
         </div>
         <div className="flex lg:gap-[53px] md:gap-[30px] sm:gap-[25px] gap-[15px] items-center pt-[29px]">
          <label htmlFor="" className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold'>SIZE:</label>
          <div className="flex lg:gap-[15px] sm:gap-[10px] gap-[7px] items-center">
             <select name="" id="" className='py-3 px-8 bg-transparent border border-[#F0F0F0] lg:text-base sm:text-sm text-xs text-[#767676]'>
                <option value="S" className='lg:text-base sm:text-sm text-xs text-[#767676]'>S</option>
                <option value="SM" className='lg:text-base sm:text-sm text-xs text-[#767676]'>SM</option>
                <option value="X" className='lg:text-base sm:text-sm text-xs text-[#767676]'>X</option>
                <option value="XL" className='lg:text-base sm:text-sm text-xs text-[#767676]'>XL</option>
                <option value="M" className='lg:text-base sm:text-sm text-xs text-[#767676]'>M</option>
             </select>
          </div>
         </div>
         <div className="flex lg:gap-[53px] md:gap-[30px] sm:gap-[25px] gap-[15px] items-center pt-[29px]">
          <label htmlFor="" className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold'>SIZE:</label>
          <div className="flex lg:gap-[15px] sm:gap-[10px] gap-[7px] items-center ">
             <div className='py-3 px-8 bg-transparent border border-[#F0F0F0] lg:max-w-[139px] md:max-w-28 sm:max-w-24 max-w-20 lg:text-base sm:text-sm text-xs text-[#767676] flex items-center lg:gap-[35px] md:gap-[30px] sm:gap-[25px] gap-5 justify-center '>
                <p className='cursor-pointer ' onClick={()=>{settext(text-1)}}>-</p>
                <h1>{text}</h1>
                <p className='cursor-pointer ' onClick={()=>{settext(text + 1)}}>+</p>
             </div>
          </div>
         </div>
                </div>
                  <div className="flex lg:gap-[27px] md:gap-6 sm:gap-4 gap-3 items-center py-5 border-b border-[#F0F0F0]">
                    <h4 htmlFor="" className='lg:text-base sm:text-sm text-xs text-[#262626] font-bold'>STATUS:</h4>
                    <p className='lg:text-base sm:text-sm text-xs text-[#767676]'>In stock</p>
                  </div>
                  <div className="flex flex-wrap lg:gap-5 md:gap-4 sm:gap-3 gap-2 py-5 border-b border-[#F0F0F0] md:justify-start justify-center items-center">
                    <ButtonForCartDropdown text="Add to Cart" className="w-[200px] md:h-auto h-10"/>
                    <ButtonForCartDropdown text="Add to Wish List" className="w-[200px] md:h-auto h-10"/>
                  </div>
                  <div className="w-full">
                    <ProductDatials text="FEATURES  & DETAILS"/>
                    <ProductDatials text="SHIPPING & RETURNS"/>
                  </div>
                  <div className="pt-[19px] lg:pb-[123px] md:pb-20 sm:pb-16 pb-12">
                    <p className='lg:text-base sm:text-sm text-xs text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="flex lg:gap-[62px] md:gap-14 sm:gap-10 gap-7">
                    <h5 onClick={()=>{setshow(!show)}} className={`lg:text-[20px] sm:text-base text-sm cursor-pointer ${show ? "text-[#262626] font-bold":"text-[#767676] font-normal"}`}>Description</h5>
                    <h5 onClick={()=>{setshow(!show)}} className={`lg:text-[20px] sm:text-base text-sm cursor-pointer ${show ? "text-[#767676] font-normal":"text-[#262626] font-bold"}`}>Reviews (1)</h5>
                  </div>
                  {
                    <div className="">
                                          <p className={`lg:text-base sm:text-sm text-xs text-[#767676] lg:leading-[30px] md:leading-6 sm:leading-5 leading-4 lg:py-6 md:py-5 sm:py-4 py-3 ${show?" inline-block":"hidden"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur illum suscipit culpa similique amet, non dicta! Laborum eveniet tempore beatae ipsa? Architecto quasi vitae eveniet magnam sapiente id est eum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eveniet enim temporibus libero hic dolores. Unde, eos sequi veritatis deserunt quasi sunt veniam repellat vel repellendus pariatur ratione libero eum.</p>
                                          <div className={`${show?"hidden":"inline-block"}`}>
                                          <p className="lg:text-base sm:text-sm text-xs text-[#767676] lg:pb-[30px] md:py-6 sm:py-4 py-3 border-b border-[#F0F0F0] lg:mb-[23px] md:mb-5 sm:mb-4 mb-3">
                                            1 review for Product
                                          </p>
                                            <div className="flex lg:gap-[37px] md:gap-7 sm:gap-5 gap-3 items-center md:mb-[14px] sm:mb-3 mb-2">
                                            <h3 className='lg:text-base sm:text-sm text-xs'>John Ford</h3>
                                            <div className="flex gap-[2px]">
                                                <FaStar className='text-[#FFD881] '/>
                                                <FaStar className='text-[#FFD881] '/>
                                                <FaStar className='text-[#FFD881] '/>
                                                <FaStar className='text-[#FFD881] '/>
                                                <FaStar className='text-[#FFD881] '/>
                                           </div>
                                            </div>
                                            <p className='lg:text-base sm:text-sm text-xs text-[#767676] lg:pb-[30px] md:py-6 sm:py-4 py-3 border-b border-[#F0F0F0] lg:mb-[23px] md:mb-5 sm:mb-4 mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>
                                              <div className="lg:mb-12 md:mb-8 sm:mb-6 mb-4">
                                              <label className='lg:text-[20px] sm:text-base text-sm text-[#262626] font-bold mb-[48px]'>Add a Review</label>
                                              </div>
                                              <div className="flex flex-col gap-y-[23px]">
                                                <InputFieldText className="font-bold" classNameinput="!pt-[10px] !pb-4" label="Name" id="Name" palceholder="Your name here"/>
                                              <InputFieldText className="font-bold" classNameinput="!pt-[10px] !pb-4" label="Email" id="Email" palceholder="Your email here"/>
                                              <div className='lg:mb-[29px] md:mb-6 sm:mb-5 mb-4'>
                                                <div className="">
                                                <label className="font-DM lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md:leading-4 sm:leading-3 leading-2 font-bold"
                                                htmlFor="Review">Review</label>
                                                </div>
                                                   <textarea className="lg:text-sm sm:text-xs text-[10px] font-DM text-[#767676] outline-none w-full max-h-[230px] border-b border-[#F0F0F0]" type="text" placeholder="Your review here" id="Review"/>
                                              </div>
                                                <div className="flex justify-center items-center md:inline-block">
                                                <ButtonForCartDropdown text="Post" className="w-[200px] md:h-auto h-10 lg:mb-[139px] md:mb-24 sm:mb-20 mb-16"/>
                                                </div>
                                              </div>
                                          </div>
                    </div>
                  }
                    
                  
            </div>
        </div>
        </Container>
    </>
  )
}

export default ProductDetails