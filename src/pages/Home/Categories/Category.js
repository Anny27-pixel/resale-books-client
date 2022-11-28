import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from "react-bootstrap";
import img1 from '../../../assets/category/img1.webp';
const Category = ({ category }) => {
    const navigate = useNavigate();
    const { id, name } = category;
    return (
        <div className="col ">
            <Card className="bg-dark text-white d-flex text-center">
                <Card.Img
                    src={img1}
                    alt="Card image"
                />
                <Card.Body>
                    <Card.Title className="fs-4 fw-bold mt-2 py-2 bg-dark text-light text-uppercase">{name}</Card.Title>
                    <Button
                        variant="light"
                        className="mt-2"
                        onClick={() => navigate(`/categories/${id}`)}
                    >
                        Show all Books
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Category;