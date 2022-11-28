import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const ProductCategory = () => {
    const { categoryProducts } = useLoaderData();
    const { name, description } = categoryProducts;

    return (
        <div className="pt-5 mt-5">
            <div className="title py-5">
                <h1 className="d-flex justify-content-center fw-bold text-primary mt-5 ">{name} Books</h1>
                <p className="text-center">{description}</p>
            </div>
            <div className="container py-4">
                {categoryProducts.length === 0 ? (
                    <>
                        <div className="display-4 " style={{ height: "30vh" }}>
                            No Books are available now
                        </div>
                    </>
                ) : (
                    ""
                )}
                <div className="products-container row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center g-4 ">

                    {categoryProducts.map((product) => (
                        <SingleProduct key={product._id} product={product}></SingleProduct>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;