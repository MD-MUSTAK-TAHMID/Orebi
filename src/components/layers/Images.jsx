import React from 'react'
import { Link } from 'react-router-dom'

const Images = ({src, alt, href, className}) => {
  return (
    <Link to={href}>
        <picture>
            <img src={src} alt={alt} className={`${className}`}/>
        </picture>
    </Link>
  )
}

export default Images