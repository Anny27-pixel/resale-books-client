import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from '../../../assets/header.png';

import { Button } from "react-bootstrap";
import { AuthContext } from "../../../Context/UserContext";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(alert("LogOut Successful"))
            .catch((error) => {
                console.error(error);
                alert("LogOut Unsuccessful");
            });
    };
    const expand = "md";
    return (
        <div id="navbar" className="fixed-top">
            {user && user.uid ? (
                <p className="bg-dark py-1 text-light m-0 text-center">
                    Welcome,
                    {user.displayName ? user.displayName : user.email}
                </p>
            ) : (
                ""
            )}
            <Navbar
                key={expand}
                expand={expand}
                className="mb-3 align-items-center  bg-nav "
            >
                <Container>
                    <Navbar.Brand>
                        <Link to="/home" className="d-flex gap-2 align-items-center text-decoration-none">
                            <img src={logo} alt="" width="60px" />
                            <h2>Resale Books</h2>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 gap-3 align-items-center">
                                <Link to="/home" className="text-decoration-none">Home</Link>
                                <Link to="/Catagories" className="text-decoration-none">Catagories</Link>
                                <Link to="/addProduct" className="text-decoration-none">AddProduct</Link>
                                <Link to="/blog" className="text-decoration-none">Blogs</Link>
                                {user && user.uid ? (
                                    <Button variant="primary" onClick={handleLogOut} className="text-decoration-none">
                                        Logout
                                    </Button>
                                ) : (
                                    <>
                                        <Link to="/signUp" className="text-decoration-none">Sign Up</Link>
                                        <Link to="/login" className="text-decoration-none">Login</Link>
                                    </>
                                )}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;