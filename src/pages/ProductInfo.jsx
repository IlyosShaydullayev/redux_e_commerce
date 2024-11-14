import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleProduct from '../components/SingleProduct'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRecommendProducts, getSingleProduct } from '../redux/action/productsAction'
import Marquee from 'react-fast-marquee'

function ProductInfo() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const {
        singleProdReducer: { products },
        recommendProdReducer: { recommendProducts },
    } = useSelector((state) => state);

    useEffect(() => {
        if (id) {
            dispatch(getSingleProduct(id))
        }
    }, [dispatch, id])

    useEffect(() => {
        if (products) {
            dispatch(getRecommendProducts(products.category))
        }
    }, [dispatch, products])

    return (
        <div>
            <Navbar />

            <SingleProduct singleProduct={products} />

            <h2 className='pl-8 text-[25px] my-4 font-semibold'>You may like it</h2>

            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50} className='flex items-center justify-between'>
                {recommendProducts?.map((item) => (
                    <div key={item.id} className='border-2 border-black rounded-md p-3 text-center max-w-[300px] w-[250px] mx-8'>
                        <img src={item.image} alt={item.title} className='w-[100px] h-[100px] mx-auto' />
                        <div className='my-4'>
                            <p className='text-[20px] line-clamp-1'>{item.title}</p>
                            <p className='text-[25px] font-semibold'>${item.price}</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <Link to={`/product/${item.id}`} className='rounded-md bg-black text-white py-2 px-4'>Buy now</Link>
                            <button className='rounded-md bg-black text-white py-2 px-4'>Add to cart</button>
                        </div>

                    </div>
                ))}
            </Marquee>

            <Footer />
        </div>
    )
}

export default ProductInfo