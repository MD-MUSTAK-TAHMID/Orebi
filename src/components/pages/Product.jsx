import Container from '../layers/Container';
import HeaderForBreadcrumb from "../layers/HeaderForBreadcrumb"
import ProductItem from '../layers/ProductItem';
import pro1 from '../../assets/pro_1.png'
import pro7 from '../../assets/pro_7.png'
import pro8 from '../../assets/pro_8.png'
import pro9 from '../../assets/pro_9.png'
import pro10 from '../../assets/pro_10.png'
import pro11 from '../../assets/pro_11.png'
import pro12 from '../../assets/pro_12.png'
import pro13 from '../../assets/pro_13.png'
import pro14 from '../../assets/pro_14.png'
import ProductFillter from '../layers/ProductFillter';
import ProductFillter_2 from '../layers/ProductFillter_2';
import ProductFillter_3 from '../layers/ProductFillter_3';
import ProductFillter_4 from '../layers/ProductFillter_4';
import Pagination from '../Pagination';
import { useState } from 'react';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FaBarsStaggered } from 'react-icons/fa6';
import { ImAirplane, ImCross } from 'react-icons/im';

const Product = () => {
  let [show, setshow] = useState(false)
  let [number,setNumber] = useState(12)
  let slectFunction = (element)=>{
  let numberConvertar = Number(element.target.value)
  setNumber(numberConvertar)
  }
  return (
    <>
      <Container>
         <HeaderForBreadcrumb text="Products"/>
         <div className="main flex justify-between">
            <div className={`p-3 sidebar lg:w-[370px] md:w-[300px] sm:w-56 w-48  md:static md:flex flex-col gap-y-[53px] absolute md:bg-transparent bg-[beige] z-10 ${show ? " translate-x-[0]":"md:translate-x-0 translate-x-[-100%]"} duration-500 transition-all `}>
              <div className='w-full md:hidden flex justify-end'>
              <div onClick={()=>setshow(false)} className='mb-3 w-6 h-6 border border-[#ababab] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-300 text-[#262626] cursor-pointer '>
                <ImCross  className='text-xs'/>
              </div>
              </div>
                <div className="flex flex-col lg:gap-y-[35px] md:gap-y-[30px] sm:gap-y-6 gap-y-4 ">
                <ProductFillter/>
              <ProductFillter_2/>
              <ProductFillter_3/>
              <ProductFillter_4/>
                </div>
            </div>
            <div className="products w-[1190px] pb-[140px]">
            {/* ============================================================= */}
        
            <div className="w-full flex justify-between mb-[60px] flex-wrap">
    <div className="icon flex gap-5 md:mb-0 mb-3 w-full md:w-auto justify-center">
    <div onClick={()=>{setshow(true)}} className='h-9 w-9 border border-[#F0F0F0] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-500 text-[#737373] cursor-pointer md:hidden' >
        <FaBarsStaggered />
      </div>
      <div className='h-9 w-9 border border-[#F0F0F0] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-500 text-[#737373] cursor-pointer' >
        <IoGrid/>
      </div>
      <div className='h-9 w-9 border border-[#F0F0F0] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-500 text-[#737373] cursor-pointer' >
        <FaList/>
      </div>
    </div>
    <div className="md:block flex flex-col justify-center w-full md:w-auto">
    <div className="right">
      <label htmlFor="" className='font-DM text-base text-[#767676] leading-7 pr-3.5 md:pl-0 pl-6 '>Sort by:</label>
      <select name="" id="" className='w-[239px] text-[#767676] px-5 py-1 text-base outline-none border bg-transparent border-[#F0F0F0]  '>
        <option value="Featured">Featured</option>
        <option value="Featured">Featured</option>
        <option value="Featured">Featured</option>
        <option value="Featured">Featured</option>
        <option value="Featured">Featured</option>
      </select>
      <label htmlFor="" className='font-DM text-base text-[#767676] leading-7 pl-10 pr-3.5 '>Show:</label>
      <select onChange={slectFunction} name="" id="" className='md:mt-0 mt-4 w-[139px] text-[#767676] px-5 py-1 text-base outline-none border bg-transparent border-[#F0F0F0]'>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="36">36</option>
        <option value="45">45</option>
      </select>

    </div>
    </div>
</div>
            {/* ============================================================= */}
                <Pagination itemsPerPage={number}/>
                {/* <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro7} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro11} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro10} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro9} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro14} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro8} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="-10%" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro12} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="-15%" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro10} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="-10%" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro9} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro1} />
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro13} />
                <ProductItem className="mx-auto" text="Basic Crew Neck Tee" price="$44.00" color="Black" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro12} /> */}
         
            </div>
         </div>
      </Container>
    </>
  )
}

export default Product