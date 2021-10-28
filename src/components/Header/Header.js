import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {

    const { user, logOut, isLoading } = useAuth();
    console.log('from header isLoading:');
    if (isLoading) {
        return <div>
            <h1>Loading</h1>
        </div>
    }
    return (
        <Navbar className="navbar" bg="" expand="lg" sticky="top">
            <Container className="w-75mx-auto">
                <Link to="/home" className="fw-bolder fs-2 me-5 text-decoration-none">Tour<span className="text-warning">Ease</span></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fs-5">
                        <NavLink as={Link} to="/home" activeStyle={{ fontWeight: "bold", color: "#91BFFF" }} className="text-decoration-none header-link me-3">Home</NavLink>
                        <NavLink as={Link} to="/myOrders" activeStyle={{ fontWeight: "bold", color: "#91BFFF" }} className="text-decoration-none header-link me-3">My Orders</NavLink>
                        <NavLink as={Link} to="/manageOrders" activeStyle={{ fontWeight: "bold", color: "#91BFFF" }} className="text-decoration-none header-link me-3">Manage Orders</NavLink>
                        <NavLink as={Link} to="/addPackages" activeStyle={{ fontWeight: "bold", color: "#91BFFF" }} className="text-decoration-none header-link me-3">Add Packages</NavLink>
                        <NavLink as={Link} to="/about" activeStyle={{ fontWeight: "bold", color: "#91BFFF" }} className="text-decoration-none header-link me-3">About</NavLink>

                    </Nav>
                    {/* conditional rendering user name */}
                    {
                        user.email && <span className="user-name me-2 fw-bold" style={{ color: "#7AA0CE" }}>{user.displayName}</span>
                    }
                    {/* conditional rendering for login and logout button */}
                    {user.email ? <button onClick={logOut} className="btn btn-warning">Log Out</button>
                        :
                        <NavLink as={Link} to="/Login" activeStyle={{ fontWeight: "bold", color: "#91BFFF", borderBottom: "1px solid #91BFFF" }} className="btn btn-primary text-decoration-none header-link me-3">Login</NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;