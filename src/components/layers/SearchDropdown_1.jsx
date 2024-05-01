import React from 'react'
import ListforSearch from './ListforSearch'

const SearchDropdown_1 = (className) => {
  return (
    <>
    <ul className={`absolute top-full lg:translate-y-[23px] translate-y-[15px] left-0 z-30 ${className}`}>
        <ListforSearch text="Accesories"/>
        <ListforSearch text="Furniture" />
        <ListforSearch text="Electronics" />
        <ListforSearch text="Clothes" />
        <ListforSearch text="Bags" />
        <ListforSearch text="Home appliances" />
    </ul>
    </>
  )
}

export default SearchDropdown_1