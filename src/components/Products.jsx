import React, { useState } from 'react'

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(null)
  return (
    <div className='mx-auto px-4'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>Latest Products</h2>
        <hr className='my-4' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-wrap justify-center py-5'>
          <button
            onClick={() => setFilteredProducts(null)}
            className={`${filteredProducts === null ? 'bg-gray-800 text-white' : 'border border-black'} transition-all duration-200 rounded-md py-2 px-4 m-2`}>All</button>
          <button
            onClick={() => setFilteredProducts('men_clothing')}
            className={`${filteredProducts === 'men_clothing' ? 'bg-gray-800 text-white' : 'border border-black'} transition-all duration-200 rounded-md py-2 px-4 m-2`}>Men's Clothing</button>
          <button
            onClick={() => setFilteredProducts('women_clothing')}
            className={`${filteredProducts === 'women_clothing' ? 'bg-gray-800 text-white' : 'border border-black'} transition-all duration-200 rounded-md py-2 px-4 m-2`}>Women's Clothing</button>
          <button
            onClick={() => setFilteredProducts('jewelery')}
            className={`${filteredProducts === 'jewelery' ? 'bg-gray-800 text-white' : 'border border-black'} transition-all duration-200 rounded-md py-2 px-4 m-2`}>Jewelery</button>
          <button
            onClick={() => setFilteredProducts('eletronics')}
            className={`${filteredProducts === 'eletronics' ? 'bg-gray-800 text-white' : 'border border-black'} transition-all duration-200 rounded-md py-2 px-4 m-2`}>Electronics</button>
        </div>
      </div>
    </div>
  )
}

export default Products