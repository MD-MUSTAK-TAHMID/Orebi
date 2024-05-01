import React from 'react'
import Navber from '../Navber'
import Searchbar from '../Searchbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Rootlayout = () => {
  return (
    <>
    <Navber/>
    <Searchbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Rootlayout