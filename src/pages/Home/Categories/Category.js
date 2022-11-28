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
                <Card.ImgOverlay>
                    <Card.Title className="fs-4 fw-bold mt-5 py-3 bg-dark text-light text-uppercase">{name}</Card.Title>
                    <Button
                        variant="dark"
                        className="mt-4"
                        onClick={() => navigate(`/categories/${id}`)}
                    >
                        Show all Books
                    </Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Category;