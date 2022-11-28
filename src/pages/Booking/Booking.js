import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderCard from './OrderCard';

const Booking = () => {
    const orders = useLoaderData();
    console.log(orders);
    return (
        <div className="">
            <div className="title pt-3">
                <h1 className="d-flex justify-content-center fw-bold text-primary mt-5 ">Your Booking</h1>
                <p className="text-center text-primary ">
                    <span className="text-waning">{orders.length}</span>books are ordered
                </p>
            </div>

            <div className="container">
                <div className="row ">
                    <div className="col text-center border py-3">orders Information</div>
                </div>
                {orders.length === 0 ? (
                    <>
                        <div className="display-4 " style={{ height: "30vh" }}>
                            you don't order anything.
                        </div>
                    </>
                ) : (
                    ""
                )}

                {orders.map((order) => (
                    <OrderCard key={order._id} order={order}></OrderCard>
                ))}
            </div>
        </div>
    );
};

export default Booking;