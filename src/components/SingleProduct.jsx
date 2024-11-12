import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SingleProduct({ singleProduct }) {
    return (
        <div className='my-7 flex justify-evenly'>
            <div>
                <img src={singleProduct.image} alt={singleProduct.title} width={400} height={400} />
            </div>

            <div>
                <p className='uppercase text-slate-500 text-[20px]'>{singleProduct.category}</p>
                <p className='font-semibold text-[40px] max-w-[600px]'>{singleProduct.title}</p>
                <div>
                    ({singleProduct?.rating ? singleProduct.rating?.rate : 0}){" "}
                    <FaStar size={25} color="yellow" className='inline items-center' />
                </div>
                <p className='text-[35px] my-4'>${singleProduct.price}</p>
                <p className='max-w-[700px] text-[25px]'>{singleProduct.description}</p>

                <div className='flex items-center gap-x-4 py-4'>
                    <button className='border-2 border-black rounded-md py-2 px-4'>Add to cart</button>
                    <Link className='border border-black rounded-md py-2 px-4 bg-black text-white' to='/cart'>Go to cart</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct