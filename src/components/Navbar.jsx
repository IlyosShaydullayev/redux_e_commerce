import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="bg-white py-3 sticky z-10 top-0 shadow-lg">
            <div className="mx-auto flex items-center justify-between px-8">
                <Link to='/' className="text-xl font-bold px-2">
                    My Ecommerce
                </Link>
                <div className="lg:flex lg:items-center">
                    <ul className="flex flex-col lg:flex-row lg:space-x-16 text-center">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/product'>Products</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/cart' className="m-2 flex items-center gap-x-2 border-2 border-black rounded-md p-2" >
                    <AiOutlineShoppingCart /> Cart (0)
                </Link>
            </div>
        </div>
    )
}

export default Navbar