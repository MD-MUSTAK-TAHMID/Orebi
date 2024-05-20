import React from 'react'
import ListforSearch_2 from './ListforSearch_2'
import { Link } from 'react-router-dom'

const SearchDropdown_2 = ({className}) => {
  return (
    <ul className={`${className} absolute top-full translate-y-[15.59px] right-0 z-10`}>
        <Link to="/my/account">
         <ListforSearch_2 text="My Account" className="border-b border-[#2d2d2d]"/>
        </Link>
        <Link to="/">
          <ListforSearch_2 text="Log Out"/>
        </Link>
    </ul>
  )
}

export default SearchDropdown_2