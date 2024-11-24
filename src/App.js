import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import { Home } from './pages';
import ProductInfo from './pages/ProductInfo';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

import "react-loading-skeleton/dist/skeleton.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<ProductInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;