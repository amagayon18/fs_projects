import React from 'react'
import { products } from '../api/products'

const Product_list = () => {
  const formatPrice = (value) =>
    new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(value)

  return (
    <section className='px-20 py-16'>
      <h1 className='mb-8 text-center text-3xl font-extrabold tracking-wide text-black md:text-4xl'>
        PRODUCT LIST
      </h1>

      {/* Product Flex Layout (3 per row) */}
      <div className='flex flex-wrap justify-center gap-10 max-w-7xl mx-auto'>
        {products.slice(0, 6).map((product, index) => (
          <div
            key={index}
            className='flex flex-col w-[30%] min-w-[280px] max-w-[320px] rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:shadow-lg'
          >
            {/* Product Image */}
            <div className='mb-4 flex h-60 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-50'>
              <img
                src={product.image}
                alt={product.name}
                className='h-full w-full object-contain'
                loading='lazy'
              />
            </div>

            {/* Product Details */}
            <div className='flex '>
              <div className='flex flex-col mb-4'>
                <h2 className='text-[15px] font-semibold leading-tight text-gray-900'>
                  {product.name}
                </h2>
                <p className='text-sm font-semibold text-gray-800'>{product.category}</p>
                <p className='text-sm text-gray-700'>{product.brand}</p>
              </div>

              {/* Price and Cart aligned vertically */}
              <div className='flex flex-col items-end mt-auto'>
                <p className='text-[15px] font-bold text-gray-900 mb-2'>
                  {(product.price)}
                </p>
                <button className='inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold tracking-wide text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50'>
                  BUY
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Product_list