import React from 'react';
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/UserContext';
import logo from '../../assets/google.png';
import toast from 'react-hot-toast';



const SignUp = () => {
    const [error, setError] = useState("");
    const { createUser, setUser, googleSignIn, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const addUserToDB = (user) => {
        // http://localhost:5000/addUser
        // https://resale-books-server.vercel.app/user
        fetch("https://resale-books-server.vercel.app/addUser", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("User added successfully");
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
                toast.error("User don't added");
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                const user = res.user;
                setUser(user);
                toast.success('sign up successful');
                const myUser = {
                    uid: user.uid,
                    name: user.displayName,
                    contact: user.phoneNumber,
                    role: "buyer",
                    email: user.email,
                };
                addUserToDB(myUser);
                navigate("/home");
            })
            .catch((error) => {
                toast.error("Cant sign up");
                console.error(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        const contact = form.contact.value;
        console.log(role, contact);

        if (password.length <= 6) {
            setError("Set the password minimum 6 characters long");
            return;
        }

        createUser(email, password)
            .then((res) => {
                toast.success('sign up successful');
                const user = res.user;
                const userInfo = {
                    displayName: name,
                    photoURL:
                        "https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg",
                    phoneNumber: contact,
                };

                updateUser(userInfo)
                    .then(() => {
                        setUser(user);
                        console.log(user);
                    })
                    .catch((err) => console.error(err));

                const myUser = {
                    uid: user.uid,
                    name: name,
                    contact: contact,
                    role: role,
                    email: user.email,
                };
                addUserToDB(myUser);
                navigate("/home");
            })
            .catch((error) => {
                toast.error(` Can't sign up because of ${error.code}`);
                console.log(error);
            });
    };

    return (
        <div>
            <div className="container mt-5 pt-5">
                <h1 className="d-flex justify-content-center fw-bold text-primary mt-5 ">Sign Up</h1>
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
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Your Phone No.</Form.Label>
                            <Form.Control
                                type="tel"
                                name="contact"
                                placeholder="Enter Your Phone number"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Select your Role</Form.Label>
                            <Form.Select aria-label="Default select example" name="role">
                                <option value="buyer" selected>
                                    Sign Up as a Buyer
                                </option>
                                <option value="seller"> Sign Up as a Seller</option>
                            </Form.Select>
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
                            sign up
                        </Button>
                    </Form>
                    <p className="mt-1 mb-3 ">
                        Already have an acoount?
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