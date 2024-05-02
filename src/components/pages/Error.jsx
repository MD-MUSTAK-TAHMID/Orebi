import React from 'react'
import Container from '../layers/Container'
import ButtonForCartDropdown from '../layers/ButtonForCartDropdown'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Error = () => {
  return (
    <div>
        <Container className="px-3 lg:px-0">
            <h2 className='lg:text-[200px] md:text-[150px] sm:text-8xl text-6xl font-DM font-bold lg:pb-[51px] md:pb-11 sm:pb-9 pb-7 lg:pt-[51px] md:pt-11 sm:pt-9 pt-7 '>
                404
            </h2>
            <p className='lg:text-base sm:text-sm text-xs font-DM font-normal lg:pb-[50px] md:pb-11 sm:pb-9 pb-7 max-w-[644px] lg:leading-[30px] md:leading-5 sm:leading-4 leading-4 text-[#767676]'>
            The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?
            </p>
            <div className="relative lg:w-[643px] w-auto">
                <input type="text" placeholder='Type to search' className='w-full lg:py-5 md:py-4 py-3 lg:px-5 md:px-4 px-3 border border-[#F0F0F0] block outline-none lg:mb-[60px] md:mb-12 sm:mb-10 mb-8 lg:text-base sm:text-sm text-xs font-DM font-normal text-[#767676]'/>
                <FaSearch className='w-[15.97px] absolute top-[50%] translate-y-[-50%] lg:right-[21.03px] right-4'/>
            </div>
            <div className="flex justify-center md:inline-block">
            <Link to="/">
                <ButtonForCartDropdown text="Back to Home" className="w-[200px] lg:mb-[140px] md:mb-[100px] sm:mb-14 mb-10 py-3" />
            </Link>
            </div>
        </Container>    
    </div>
  )
}

export default Error