import React from 'react'
import Container from './layers/Container'
import List from "./layers/List"
import { Link } from 'react-router-dom'
import logo from "../assets/LogoForFooter.png"
import Images from './layers/Images'
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import ListForFooter from './layers/ListForFooter'


const Footer = () => {
  return (
    <div className='lg:pt-[55px] md:pt-10 sm:pt-8 pt-6 lg:pb-[59px] md:pb-10 sm:pb-8 pb-6 bg-[#f5f5f3]'>
        <Container className="flex justify-between flex-wrap px-3 md:px-0">
        <Images className="md:hidden block w-20 pb-5" src={logo}/>
            <div className="right w-full md:w-auto">
                <div className="flex lg:gap-[141px] justify-between items-start">
                    <ul className='flex flex-col lg:gap-[6px] md:gap-1 sm:gap-0.5 gap-0'>
                        <label className='font-DM text-[#262626] lg:text-[16px] md:text-sm sm:text-xs text-[10px] font-bold mb-[11px] lg:leading-[23px] sm:leading-3 leading-[8px]'>MENU</label>
                        <ListForFooter to="/" text="Home"/>
                        <ListForFooter to="/products" text="Shop"/>
                        <ListForFooter to="/about" text="About"/>
                        <ListForFooter to="/contacts" text="Contact"/>
                        <ListForFooter to="/products/details" text="Journal"/>
                    </ul>
                    <ul className='flex flex-col lg:gap-[6px] md:gap-1 sm:gap-0.5 gap-0 w-auto'>
                        <label className='font-DM text-[#262626] lg:text-[16px] md:text-sm sm:text-xs text-[10px] font-bold mb-[11px] lg:leading-[23px] sm:leading-3 leading-[8px]'>SHOP</label>
                        <ListForFooter text="Category 1" />
                        <ListForFooter text="Category 2" />
                        <ListForFooter text="Category 3" />
                        <ListForFooter text="Category 4" />
                        <ListForFooter text="Category 5" />
                    </ul>
                    <ul className='flex flex-col lg:gap-[6px] md:gap-1 sm:gap-0.5 gap-0'>
                        <label className='font-DM text-[#262626] lg:text-[16px] md:text-sm sm:text-xs text-[10px] font-bold mb-[11px] lg:leading-[23px] sm:leading-3 leading-[8px] '>HELP</label>
                        <ListForFooter text="Privacy Policy"/>
                        <ListForFooter text="Terms & Conditions" />
                        <ListForFooter text="Special E-shop" />
                        <ListForFooter text="Shipping" />
                        <ListForFooter text="Secure Payments" />
                    </ul>
                    <ul className='flex flex-col lg:gap-[6px] md:gap-1 sm:gap-0.5 gap-0 pl-1'>
                        <Link to="tel:(052) 611-5711"><label className='font-DM text-[#262626] lg:text-[16px] md:text-sm sm:text-xs text-[10px] font-bold mb-[11px] lg:leading-[27px] sm:leading-4 leading-[10px]'>(052) 611-5711</label></Link>
                        <Link to="https://company@domain.com"><label className='font-DM text-[#262626] lg:text-[16px] md:text-sm sm:text-xs text-[10px] font-bold mb-[11px] lg:leading-[27px] sm:leading-4 leading-[10px]'>company@domain.com</label></Link>
                        <ListForFooter text="575 Crescent Ave. Quakertown, PA 18951" />
                    </ul>
                </div>
                        <label className='font-DM text-[#262626] text-[16px] font-bold lg:mt-[65px] md:mt-[55px] sm:mt-8 mt-7 lg:leading-[23px] sm:leading-3 leading-[8px] flex gap-[26px]'>
                            <Link><FaFacebookF /></Link>
                            <Link><BiLogoLinkedin /></Link>
                            <Link><FaInstagram /></Link>
                        </label>
            </div>
            <div className="left">
                <ul className='flex flex-col justify-between h-full'>
                    <div>
                        <Images className="hidden md:block" src={logo}/>
                    </div>
                    <ListForFooter text="2024 Orebi Minimal eCommerce site by MD. Mustak Tahmid"/>
                </ul>

            </div>
        </Container>
    </div>
  )
}

export default Footer