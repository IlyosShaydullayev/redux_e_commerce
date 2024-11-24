import { AiOutlineShoppingCart } from "react-icons/ai"
import { LuUser2, LuUserPlus } from "react-icons/lu"
import { Link } from "react-router-dom"

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        window.location.reload()
    }   

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
                    <div className="flex items-center justify-center">
                        {!user ? (
                            <div className="flex item-center gap-x-2">
                                <Link to='/login' className="border-2 border-black px-2 py-4 rounded-md flex items-center gap-x-2"><LuUser2 /> Login</Link>
                                <Link to='/register' className="border-2 border-black px-2 py-4 rounded-md flex items-center gap-x-2"><LuUserPlus /> Register</Link>
                            </div>
                        ) : (
                            <button className="border-2 border-black px-2 py-4 rounded-md" onClick={handleLogout}>Logout</button>
                        )}
                        
                        <Link to='/cart' className="m-2 flex items-center gap-x-2 border-2 border-black rounded-md p-2" >
                            <AiOutlineShoppingCart /> Cart (0)
                        </Link>

                        {user && (
                            <div className="m-2">
                                <Link>
                                    <img
                                        src={user?.imageUrl}
                                        alt={user?.name}
                                        title={user?.name}
                                        width={35}
                                        loading="lazy"
                                        className="rounded-md object-cover"
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default Navbar