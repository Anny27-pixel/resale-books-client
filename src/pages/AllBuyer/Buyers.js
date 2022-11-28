import React from 'react';
import BuyerCard from '../../pages/AllBuyer/BuyerCard';
import { useLoaderData } from 'react-router-dom';

const Buyers = () => {
    const buyers = useLoaderData();
    console.log(buyers);
    return (
        <div className="">
            <div className="title">
                <h1 className="d-flex justify-content-center fw-bold text-primary mt-5 ">All Buyers</h1>
                <p className="text-center text-primary ">
                    <span className="text-danger">{buyers.length}</span> Active buyers
                    Found
                </p>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col text-center border py-3">buyer Information</div>
                </div>

                {buyers.map((buyer) => (
                    <BuyerCard key={buyer.uid} buyer={buyer}></BuyerCard>
                ))}
            </div>
        </div>
    );
};

export default Buyers;