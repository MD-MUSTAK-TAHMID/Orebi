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
import ProductPageTop from '../layers/ProductPageTop';

const Product = () => {
  return (
    <>
      <Container>
         <HeaderForBreadcrumb/>
         <div className="main flex justify-between">
            <div className="sidebar w-[370px] flex flex-col gap-y-[53px]">
              <ProductFillter/>
              <ProductFillter_2/>
              <ProductFillter_3/>
              <ProductFillter_4/>
            </div>
            <div className="products w-[1190px] flex flex-wrap gap-y-[50px] gap-x-10">
                <ProductPageTop/>
                <ProductItem text="Basic Crew Neck Tee" price="$44.00" color="Black" offer="New" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro7} />
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
                <ProductItem className="mx-auto" text="Basic Crew Neck Tee" price="$44.00" color="Black" overly_1="Add to Wish List" overly_2='Compare' overly_3="Add to Cart" src={pro12} />
                <div className='w-full justify-between'>
                  <p className='font-DM text-sm text-[#767676] leading-7'>Products from 1 to 12 of 80</p>  
                </div>          
            </div>
         </div>
      </Container>
    </>
  )
}

export default Product