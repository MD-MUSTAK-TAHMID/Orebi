// import React from 'react'
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductItem from './layers/ProductItem';
import pro10 from '../assets/pro_10.png'

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
];


const Pagination = ({itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  let  [items,setItem] = useState([])

  useEffect(()=>{
    const getData = async ()=>{
      try{
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()
        setItem(data.products);
        
      }catch{
        console.error("Error");
        
      }
    }
    getData()
  },[])
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  let Items =({ currentItems })=> {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div className='flex w-full justify-center md:w-auto md:block'>
            <ProductItem text={item.title} price={item.price} color={item.brand} offer={`${item.discountPercentage}%`} overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={item.thumbnail} />
            </div>
          ))}
      </>
    );
  }
 
  return (
    <>
      <div className='flex flex-wrap gap-x-10 gap-y-[50px]'>
      <Items currentItems={currentItems} />
      </div>
    <div className="flex flex-wrap md:justify-between items-center lg:mt-[50px] md:mt-10 sm:mt-8 mt-6">
    <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        previousClassName="page-item hidden"
        nextClassName="page-item hidden"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex gap-[15px] flex-wrap justify-center"
        pageClassName="page-item w-9 h-9 border border-[#F0F0F0] text-[#767676] hover:text-white duration-500 transition-all"
        pageLinkClassName="page-link w-ful h-full flex justify-center items-center inline-block  text-sm font-DM hover:bg-[#262626] duration-500 transition-all"
        activeClassName="active bg-[#262626] text-white"
      />
      <p className='px-3 md:px-0 mt-4 md:mt-0 font-DM md:text-sm sm:text-xs text-[9px] text-[#767676] lg:leading-7 md:leading-5 sm:leading-4 leading-3'>Products from {itemOffset+1} to {endOffset > items.length ?items.length:endOffset } of {items.length}</p>  
    </div>
    </>
  );
}

export default Pagination