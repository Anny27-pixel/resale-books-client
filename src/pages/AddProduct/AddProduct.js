import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Form } from "react-bootstrap";
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const AddProduct = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const time = format(new Date(), "PPpp");
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const product = {
            name: form.name.value,
            condition: form.condition.value,
            buyValue: form.buyValue.value,
            sellValue: form.sellValue.value,
            contact: form.contact.value,
            purchaseYear: form.purchaseYear.value,
            category: form.category.value,
            image: form.image.value,
            sellerID: user.uid,
            sellerName: user.displayName,
            sellerEmail: user.email,
            postedTime: time,
        };
        console.log(product);

        // //console.log(service);

        fetch("https://resale-books-server-anny27-pixel.vercel.app/addProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("New Service Added");
                form.reset();
                navigate("/myProducts");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="my-5">
            <div className="container mt-5 pt-5">
                <div className="title pt-5">
                    <h2 className="mt-4 ps-4 mb-5 text-center">
                        Add Books for ReSell
                    </h2>
                </div>

                <div className="add-service-container pt-5 row">
                    <div className="add-service-form-container col-12 col-md-8">
                        <form onSubmit={handleSubmit} className="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Book Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter your book name"
                                    required
                                />
                            </div>

                            <div className="row">
                                <Form.Group className="col mb-3">
                                    <Form.Label>SelectYour Book Category</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        name="category"
                                    >
                                        <option value="1" selected>
                                            Academic
                                        </option>
                                        <option value="2">Job preparation</option>
                                        <option value="3">Novel</option>
                                        <option value="4">Historical</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="col mb-3">
                                    <Form.Label>Select your  Product Condition</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        name="condition"
                                    >
                                        <option value="excellent" selected>
                                            Excellent
                                        </option>
                                        <option value="good">Good</option>
                                        <option value="fair">Fair</option>
                                    </Form.Select>
                                </Form.Group>

                                <div className="mb-3 col">
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="form-label"
                                    >
                                        Purchase Year
                                    </label>
                                    <input
                                        type="text"
                                        name="purchaseYear"
                                        className="form-control"
                                        placeholder="Purchase year?"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Add a description for your Book"
                                    required
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Book  Image
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    className="form-control"
                                    placeholder="Insert any Image URl of your Books"
                                    required
                                />
                            </div>
                            <div className="row">
                                <div className="mb-3  col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Buying Price
                                    </label>
                                    <input
                                        name="buyValue"
                                        type="number"
                                        className="form-control"
                                        placeholder="enter your Buying Price"
                                        required
                                    />
                                </div>
                                <div className="mb-3 col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Selling Price
                                    </label>
                                    <input
                                        name="sellValue"
                                        type="number"
                                        className="form-control"
                                        placeholder="enter your Selling Price"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    User Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    placeholder="Enter Selling Location"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="contact"
                                    className="form-control"
                                    placeholder="Enter Selling Location"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddProduct;