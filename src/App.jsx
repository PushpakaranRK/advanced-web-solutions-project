import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import VendorsPage from './pages/VendorsPage';
import Sidebar from './components/Sidebar.jsx';
import './styles/Sidebar.scss';
import HomePage from "./pages/HomePage.jsx";

const App = () => {
    return (
        <Router>
            <div className="sidebar-container">
                <Sidebar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard"/>}/>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="/dashboard" element={<DashboardPage/>}/>
                        <Route path="/vendors" element={<VendorsPage/>}/>
                        <Route path="/products" element={<ProductsPage/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
