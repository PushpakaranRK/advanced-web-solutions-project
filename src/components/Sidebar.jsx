import {ListGroup} from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="/react.svg" alt="Logo" className="logo__image"/>
            </div>
            <div className="sidebar-items">
                <ListGroup>
                    <ListGroup.Item className="sidebar__item" to="/dashboard">
                        Dashboard
                    </ListGroup.Item>
                    <ListGroup.Item className="sidebar__item" to="/home">
                        Home
                    </ListGroup.Item>
                    <ListGroup.Item className="sidebar__item" to="/vendors">
                        Vendors
                    </ListGroup.Item>
                    <ListGroup.Item className="sidebar__item" to="/products">
                        Products
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};


export default Sidebar;
