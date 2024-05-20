import React, { useEffect, useRef, useState } from 'react'
import Container from './layers/Container'
import { IoPerson } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import SearchDropdown_1 from './layers/SearchDropdown_1';
import SearchDropdown_2 from './layers/SearchDropdown_2';
import SearchDropdown_3 from './layers/SearchDropdown_3';
import bar from "../assets/bar.png"
const Searchbar = () => {
  let [cat, setcat] = useState(false);
  let catRef = useRef()
  useEffect(()=>{
    document.body.addEventListener("click", (element)=>{
      if(catRef.current.contains(element.target)){
        setcat(true)
      }else{
        setcat(false)
      }
    })
  },[])
  let [cat2, setcat2] = useState(false);
  let catRef2 = useRef()
  useEffect(()=>{
    document.body.addEventListener("click", (element)=>{
      if(catRef2.current.contains(element.target)){
        setcat2(true)
      }else{
        setcat2(false)
      }
    })
  },[])
  let [cat3, setcat3] = useState(false);
  let catRef3 = useRef()
  useEffect(()=>{
    document.body.addEventListener("click", (element)=>{
      if(catRef3.current.contains(element.target)){
        setcat3(true)
      }else{
        setcat3(false)
      }
    })
  },[])
  
  return (
    <>
        <section className='md:py-[25px] py-3 md:px-0 px-3 bg-[#F5F5F3]'>
            <Container className="flex lg:justify-between justify-center items-center flex-wrap lg:gap-0 gap-3 cursor-pointer">
                <div ref={catRef} className="shop flex gap-[10.71px] items-center relative ">
                  <picture className=''>
                    <img src={bar} alt="" />
                  </picture>
                  <p className='order- text-[#262626] font-DM md:text-[14px] text-xs font-normal'>Shop by Category</p>
                  <div className="">
                    {cat && (
                      <SearchDropdown_1/>
                    )}
                  </div>
                </div>
                <div className="order-3 md:order-1 searchbar">
                  <form className='relative lg:w-[601px] w-full '>
                    <input type="text" placeholder='Search Products' className='lg:py-4 py-2 lg:ps-[21px] ps-4 lg:w-full pr-10 lg:pr-12 block outline-none appearance-none'/>
                    <FaSearch className='w-[15.97px] absolute top-[50%] translate-y-[-50%] lg:right-[21.03px] right-4'/>
                  </form>
                </div>
                <div className="order-1 menu flex lg:gap-[41px] gap-4 ms-3">
                    <div className="relative">
                     <div ref={catRef2} className="person flex lg:gap-[10.52px] gap-1">
                      <IoPerson />
                      <TiArrowSortedDown />
                     </div>
                      {cat2 && (
                        <SearchDropdown_2/>
                      )}
                    </div>
                    <div className="relative">
                     <div ref={catRef3} className="">
                     <FaShoppingCart  />
                    {cat3 && (
                      <SearchDropdown_3/>
                    )}
                     </div>
                    </div>

                </div>
            </Container>
        </section>
    </>
  )
}

export default Searchbar