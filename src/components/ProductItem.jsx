import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart } from "../redux/action/productsAction"

function ProductItem({ product }) {
    const dispatch = useDispatch()

    const handleAddToCart = (prodItem) => {
        dispatch(addToCart(prodItem))
    }

    return (
        <div>
            <div className="p-3 border-2 rounded-xl">
                <img
                    src={product.image}
                    alt="..."
                    className="mx-auto p-3 h-52 w-56 cursor-pointer"
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                    loading="lazy"
                />
                <div>
                    <h5 className="line-clamp-1 text-[18px] font-semibold">{product.title}</h5>
                </div>
                <p className="line-clamp-2 text-[16px]">{product.description}</p>
                <div className="text-center flex pt-4">
                    <Link to={`/product/${product.id}`} className="mx-auto bg-red-500 text-white rounded-md py-2 px-4">Buy Now</Link>
                    <button className="mx-auto bg-blue-500 text-white rounded-md py-2 px-4" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem