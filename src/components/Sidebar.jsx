import {ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="/vite.svg" alt="Logo" className="logo__image"/>
                <img src="/react.svg" alt="Logo" className="logo__image"/>
            </div>
            <div className="sidebar-items">
                <ListGroup>
                    <ListGroup.Item className="sidebar__item" as={Link} to="/dashboard">
                        Dashboard
                    </ListGroup.Item>
                    <ListGroup.Item className="sidebar__item" as={Link} to="/vendors">
                        Vendors
                    </ListGroup.Item>
                    <ListGroup.Item className="sidebar__item" as={Link} to="/products">
                        Products
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};


export default Sidebar;
