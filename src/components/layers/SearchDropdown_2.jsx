import React from 'react'
import ListforSearch_2 from './ListforSearch_2'

const SearchDropdown_2 = ({className}) => {
  return (
    <ul className={`${className} absolute top-full translate-y-[15.59px] right-0 z-10`}>
        <ListforSearch_2 text="My Account" className="border-b border-[#2d2d2d]"/>
        <ListforSearch_2 text="Log Out"/>
    </ul>
  )
}

export default SearchDropdown_2