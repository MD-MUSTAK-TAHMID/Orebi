import React, { useEffect, useState } from 'react'
import Container from './layers/Container'
import Images from './layers/Images'
import List from './layers/List'
import { FaBars } from "react-icons/fa";
import logo_main from"../assets/logo.png"
const Navber = () => {
    let [show, setShow] = useState(false);
    let fdr = () => {
        setShow(!show)
    }
    useEffect(() => {
    
        function size(){    
            if(window.innerWidth < 1024){
                setShow(false)
            }else{
                setShow(true)
            }
        }
        size()
        window.addEventListener("resize", size)

    },[])
  return (
    <nav className='md:py-8 py-4'>
        <Container className="flex items-center justify-between lg:static lg:px-[0px] px-5 relative">
            <div className="logo">
                <Images href="/" src={logo_main} alt="logo"/>
            </div>
            <FaBars onClick={fdr} className='lg:hidden cursor-pointer'/>   
                <div className={`menu w-full lg:flex justify-center transition-all duration-500 items-center absolute lg:static top-full left-0 bg-slate-200 lg:bg-transparent py-7 px-5 lg:py-0 lg:px-0 lg:mt-0 mt-5 z-20 ${show?" opacity-100 visible":" opacity-0 invisible"}`}>
                     <ul className='flex  lg:gap-x-10 gap-x-16 gap-y-5 items-center justify-center lg:flex-row flex-wrap ps'>
                         <List href="/" text="Home"/>
                         <List href="/products" text="Shop"/>
                         <List href="/about" text="About"/>
                         <List href="/contacts" text="Contacts"/>
                         <List href="/products/details" text="Journal"/>
                         <List href="/login" text="Log In"/>
                     </ul>
                 </div>
        </Container>
    </nav>
  )
}

export default Navber