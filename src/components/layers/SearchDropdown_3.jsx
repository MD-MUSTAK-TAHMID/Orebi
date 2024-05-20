import React from 'react'
import ButtonForCartDropdown from './ButtonForCartDropdown';
import CartDropdownProduct from './CartDropdownProduct';
import { Link } from 'react-router-dom';


const SearchDropdown_3 = () => {
  return (
    <>
        <div className="border border-[#F0F0F0] absolute top-full translate-y-[15.59px] right-[-55px] z-[5]">
            <CartDropdownProduct/>
            <div className="px-[21px] pt-[14px] pb-5 bg-white">
                <div className="flex pb-[13px] gap-1">
                    <h4 className='lg:text-[16px] md:[14px] sm:text-xs text-[10px] font-DM font-normal text-[#767676]'>Subtotal: </h4>
                    <h4 className='lg:text-[16px] md:[14px] sm:text-xs text-[10px] font-DM font-bold'>$44.00</h4>
                </div>
                <div className="button flex justify-between gap-[21px] items-center">
                    <Link to="/cart">
                        <ButtonForCartDropdown text="View Cart"/>
                    </Link>
                    <Link to="/checkout">
                    <ButtonForCartDropdown text="Checkout"/>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchDropdown_3