import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

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
    const logo =
        "https://cdn0.iconfinder.com/data/icons/library-9/64/Search-book-find-education-school-library-magnifier-256.png";
    return (
        <div id="navbar" className="fixed-top">
            {user && user.uid ? (
                <p className="bg-dark py-1 text-light m-0 text-center">
                    🎉 Welcome,
                    {user.displayName ? user.displayName : user.email}
                </p>
            ) : (
                ""
            )}
            <Navbar
                key={expand}
                expand={expand}
                className="mb-3 align-items-center  bg-nav"
            >
                <Container>
                    <Navbar.Brand>
                        <Link to="/home" className="d-flex gap-2 align-items-center">
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
                                <Link to="/home">Home</Link>
                                <Link to="/Catagories">Catagories</Link>
                                <Link to="/addProduct">Add a Product</Link>
                                <Link to="/blog">Blogs</Link>
                                {user && user.uid ? (
                                    <Button variant="primary" onClick={handleLogOut}>
                                        Logout
                                    </Button>
                                ) : (
                                    <>
                                        <Link to="/signUp">Sign Up</Link>
                                        <Link to="/login">Login</Link>
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