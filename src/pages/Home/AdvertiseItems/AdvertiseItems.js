import React from 'react';
import { Card } from "react-bootstrap";
const AdvertiseItems = ({ myProduct }) => {
    const { name, image,
        buyValue,
        sellValue,
        purchaseYear, status, location
    } = myProduct;

    return (

        <div className="col">
            <Card>
                <Card.Img
                    variant="top"
                    src={image}
                />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div className='d-flex'>
                            <p>Buying price : {buyValue}</p>
                            <p>Selling price : {sellValue}</p>
                        </div>
                        <p>Purchase Year : {purchaseYear}</p>
                        <p>Status : {status}</p>
                        <p>Location : {location}</p>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>

    );
};

export default AdvertiseItems;