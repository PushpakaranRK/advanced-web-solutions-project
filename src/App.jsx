import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import VendorsPage from './pages/VendorsPage';
import HomePage from "./pages/HomePage.jsx";

import './styles/Sidebar.scss';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/vendors" element={<VendorsPage/>}/>
                <Route path="/products" element={<ProductsPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
