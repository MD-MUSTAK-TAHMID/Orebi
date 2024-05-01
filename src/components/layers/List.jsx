import React from 'react'
import { Link } from 'react-router-dom'

const List = ({href, text, className}) => {
  return (
    <li>
        <Link to={href} className={`font-DM text-sm hover:font-bold hover:text-black text-[#767676] font-normal transition-all duration-300 ${className}`}>
            {text}
        </Link>
    </li>
  )
}

export default List