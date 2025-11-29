import {useEffect, useState} from 'react';
import React from 'react';
import {products} from '../api/products';
import axios from 'axios';
import {BASE_URL} from '../api/api_base';
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import Loading from "./Loading.jsx";


const Product_list = () => {

   const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products/`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  const formatPrice = (value) =>
    new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(value)

    if(isLoading) return <Loading />;

  return (
    <section className='px-20 py-16'>
      <h1 className='mb-8 text-center text-3xl font-extrabold tracking-wide text-black md:text-4xl'>
        PRODUCT LIST
      </h1>

      {/* Product Flex Layout (3 per row) */}
 
 <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
  {products.slice(0, 6).map((product, index) => (
    <div
      key={index}
      className="flex flex-col w-[30%] min-w-[280px] max-w-[320px] rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="mb-4 flex h-60 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-50">
        <img
          src={`${BASE_URL}${product.image}`}
          alt={product.product_name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Product Name + Price Row */}
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-[16px] font-semibold text-gray-900 leading-tight max-w-[65%]">
          {product.product_name}
        </h2>

        <p className="text-[16px] font-bold text-gray-900 text-right">
          {product.product_price}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-2">
        {product.description}
      </p>

      {/* Brand */}
      <p className="text-sm font-medium text-gray-800 mb-4">
        {product.brand}
      </p>

{/* Star Rating */}
<div className="flex items-center mb-4">
  <FiStar className="text-yellow-500 text-xl" />
  <FiStar className="text-yellow-500 text-xl" />
  <FiStar className="text-yellow-500 text-xl" />
  <FiStar className="text-yellow-500 text-xl" />
  <FiStar className="text-gray-300 text-xl" />
</div>

      {/* Buy Button (aligned right) */}
      <div className="flex justify-end mt-auto">
        <button className="gap-2 inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 mx-2 text-sm font-bold tracking-wide text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50">
           <FiShoppingBag className="text-[18px]" /> 
           CART
        </button> 
        <button className="gap-2 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold tracking-wide text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50">
           <FiShoppingCart className="text-[18px]" />
           BUY
        </button>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}

export default Product_list