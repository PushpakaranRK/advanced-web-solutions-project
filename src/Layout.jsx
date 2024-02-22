import Sidebar from "./components/Sidebar.jsx";
import PropTypes from "prop-types";

import './styles/Sidebar.scss';

const Layout = ({children}) => {
    return (
        <div className="sidebar-container">
            <Sidebar/>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
