import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sellercard from './Sellercard';

const AllSeller = () => {
    const sellers = useLoaderData();
    console.log(sellers);
    return (
        <div className="">
            <div className="title">
                <h1 className="d-flex justify-content-center fw-bold text-primary mt-5 ">All Sellers</h1>
                <p className="text-center text-primary ">
                    <span className="text-warning">{sellers.length}</span> Active Sellers
                </p>
            </div>
            <div className="container">
                {sellers.map((seller) => (
                    <Sellercard key={seller.uid} seller={seller}></Sellercard>
                ))}

            </div>
        </div>
    );
};

export default AllSeller;