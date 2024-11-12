import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SingleProduct from '../components/SingleProduct'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../redux/action/productsAction'

function ProductInfo() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.singleProdReducer)

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dispatch, id])

    return (
        <div>
            <Navbar />

            <SingleProduct singleProduct={products} />

            <Footer />
        </div>
    )
}

export default ProductInfo