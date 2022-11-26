import React from 'react';
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/UserContext';
import logo from '../../assets/google.png';



const SignUp = () => {
    const [error, setError] = useState("");
    const { createUser, setUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                const user = res.user;
                setUser(user);
                navigate("/home");
            })
            .catch((error) => {
                alert("Cant sign in");
                console.error(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length <= 6) {
            setError("set the password at least 6 characters long");
        }

        createUser(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                alert("Sign up Successful");
                form.reset();
                navigate("/home");
            })
            .catch((error) => {
                alert("User Sign up Failed.");
                console.error(error);
            });
    };

    return (
        <div>
            <div className="container mt-5 pt-5">
                <h1 className="d-flex justify-content-center fw-bold text-primary">Sign Up</h1>
                <div
                    className="form-container mx-auto border border-1 my-5 p-3"
                    style={{ maxWidth: "420px" }}
                >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                name="name"
                                placeholder="Enter Your Name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                            <small className="text-danger">{error}</small>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="d-block w-100">
                            Sign Up
                        </Button>
                    </Form>
                    <p className="mt-1 mb-3 ">
                        Already have an Account?
                        <Link className="text-decoration-none" to="/login">
                            Login
                        </Link>
                    </p>
                    <div className="d-flex justify-content-between">
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline-warning text-dark w-100 "
                        >
                            Sign-in with
                            <img
                                src={logo}
                                alt=""
                                width="35px"
                                className="mx-1"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;