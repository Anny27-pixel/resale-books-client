import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertiseItems from '../Home/AdvertiseItems/AdvertiseItems';

const MyProducts = () => {
    const myProducts = useLoaderData();
    // const { name, image,
    //     buyValue,
    //     sellValue,
    //     purchaseYear, status, location
    // } = myProducts;
    return (
        <section className="py-5">
            <h1 className="d-flex justify-content-center fw-bold text-primary">Products from Our Seller</h1>
            <div className="item-container container my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col">
                        {
                            myProducts.map(myProduct => <AdvertiseItems
                                key={myProduct._id}
                                myProduct={myProduct}
                            ></AdvertiseItems>)
                        }
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MyProducts;