import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './pages';
import ProductInfo from './pages/ProductInfo';
import Login from './pages/Login';
function App() {
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<ProductInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;