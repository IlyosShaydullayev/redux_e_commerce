import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './pages';
function App() {
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;