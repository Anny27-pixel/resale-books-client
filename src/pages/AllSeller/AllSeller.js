import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Sellercard from './Sellercard';

const AllSeller = () => {
    const data = useLoaderData();
    const [sellers, setSellers] = useState(data);

    const deleteHandler = (email) => {
        console.log(email);
        const sellersRemaining = sellers.filter((seller) => seller.email !== email);
        setSellers(sellersRemaining);

        fetch(`https://resale-books-server.vercel.app/user/${email}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast("User Deleted from Database");
            })
            .catch((err) => console.error(err));
    };
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
                    <Sellercard
                        key={seller.uid}
                        seller={seller}
                        deleteHandler={deleteHandler}
                    ></Sellercard>
                ))}

            </div>
        </div>
    );
};

export default AllSeller;