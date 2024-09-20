import React, { useEffect, useRef, useState } from 'react';
import Container from './layers/Container';
import { IoPerson } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import SearchDropdown_1 from './layers/SearchDropdown_1';
import SearchDropdown_2 from './layers/SearchDropdown_2';
import SearchDropdown_3 from './layers/SearchDropdown_3';
import bar from "../assets/bar.png";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]); // Always an array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json(); // Ensure this is awaited
        setProduct(data.products || []); // Handle the case where products might be undefined
        setFilterProduct(data.products || []); // Same here
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilterProduct(""); // Reset to all products if search is empty
    } else {
      const filterData = product.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterProduct(filterData);
    }
  }, [search, product]);

  const manageSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const [cat, setCat] = useState(false);
  const catRef = useRef();

  useEffect(() => {
    const handleClick = (element) => {
      if (catRef.current && catRef.current.contains(element.target)) {
        setCat(true);
      } else {
        setCat(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  // Similar logic for cat2 and cat3...

  return (
    <>
      <section className='md:py-[25px] py-3 md:px-0 px-3 bg-[#F5F5F3]'>
        <Container className="flex lg:justify-between justify-center items-center flex-wrap lg:gap-0 gap-3 cursor-pointer">
          <div ref={catRef} className="shop flex gap-[10.71px] items-center relative ">
            <img src={bar} alt="" />
            <p className='order- text-[#262626] font-DM md:text-[14px] text-xs font-normal'>Shop by Category</p>
            {cat && <SearchDropdown_1 />}
          </div>
          <div className="order-3 md:order-1 searchbar">
            <form className='relative lg:w-[601px] w-full'>
              <input
                type="text"
                onChange={manageSearch}
                value={search}
                placeholder='Search Products'
                className='lg:py-4 py-2 lg:ps-[21px] ps-4 lg:w-full pr-10 lg:pr-12 block outline-none appearance-none'
              />
              <FaSearch className='w-[15.97px] absolute top-[50%] translate-y-[-50%] lg:right-[21.03px] right-4' />
            </form>
          </div>
          <div className="order-1 menu flex lg:gap-[41px] gap-4 ms-3">
            {/* Dropdowns for categories */}
          </div>
        </Container>
        <Container className="pt-10">
        {filterProduct && filterProduct.length > 0 ? (
          <ul className='flex flex-col gap-4'>
            {filterProduct.map(item => (
              <li className='text-base text-[#6d6d6d] p-3 bg-[#bdbdbd]' key={item.id}>{item.title}</li> // Ensure key is provided
            ))}
          </ul>
        ) : (
          <p>...</p>
        )}
        </Container>
      </section>
    </>
  );
};

export default Searchbar;