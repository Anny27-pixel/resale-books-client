import React, { useState } from 'react';
import BuyerCard from '../../pages/AllBuyer/BuyerCard';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const Buyers = () => {
    const data = useLoaderData();
    const [buyers, setBuyers] = useState(data);

    const deleteHandler = (email) => {
        console.log(email);
        const buyersRemaining = buyers.filter((buyer) => buyer.email !== email);
        setBuyers(buyersRemaining);

        fetch(`https://resale-books-server.vercel.app/user/${email}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast('User Deleted from Database')
            })
            .catch((err) => console.error(err));
    };

    console.log(buyers);
    return (
        <div className="">
            <div className="title">
                <h1 className="d-flex justify-content-center fw-bold text-primary mt-5 ">All Buyers</h1>
                <p className="text-center text-primary ">
                    <span className="text-warning">{buyers.length}</span> Active buyers
                </p>
            </div>
            <div className="container">
                {buyers.map((buyer) => (
                    <BuyerCard
                        key={buyer.uid}
                        buyer={buyer}
                        deleteHandler={deleteHandler}
                    ></BuyerCard>
                ))}
            </div>
        </div>
    );
};

export default Buyers;