import { useEffect } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/action/productsAction";

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <>
            <Navbar />
            <Main />
            <Products />
            <Footer />
        </>
    )
}

export default Home;