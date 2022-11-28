import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import CardOfProduct from './CardOfProduct';

const SellerProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className="">
            <div className="title pt-3">
                <h1 className="d-flex justify-content-center fw-bold text-primary mt-5 ">Products Added by Seller</h1>
                <p className="text-center text-primary ">
                    <span className="text-danger">{products.length}</span> Products Found
                </p>
            </div>
            .
            <div className="container">
                <div className="row ">
                    <div className="col text-center border py-3">
                        Products Information
                    </div>
                </div>
                {products.length === 0 ? (
                    <>
                        <div className="display-4 " style={{ height: "30vh" }}>
                            Product not found
                            <br />
                            <Link className="btn btn-primary" to="/dashboard/addProduct">
                                {" "}

                                Add Product
                            </Link>
                        </div>
                    </>
                ) : (
                    ""
                )}
                {products.map((product) => (
                    <CardOfProduct key={product._id} product={product}></CardOfProduct>

                ))}
            </div>
        </div>
    );
};

export default SellerProducts;