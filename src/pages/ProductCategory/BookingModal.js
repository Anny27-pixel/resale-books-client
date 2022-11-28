import { format } from 'date-fns';
import React, { useContext } from 'react';
import Modal from "react-bootstrap/Modal";
import toast from 'react-hot-toast';
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const BookingModal = ({ bookingInfo, handleClose, handleShow, show }) => {
    const navigate = useNavigate();
    const time = format(new Date(), "PPpp");

    const { user } = useContext(AuthContext);
    const { name, price } = bookingInfo;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const orderInformation = {
            BuyerName: form.name.value,
            BuyerEmail: form.email.value,
            BuyerContact: form.contact.value,
            meetingLocation: form.location.value,
            orderTime: time,
            ...bookingInfo,
        };

        fetch("http://localhost:5000/makeOrder", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderInformation),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("order confirmed");
                form.reset();
                navigate(`/dashboard/myBookings/${user.email}`);
            })
            .catch((err) => {
                console.error(err);

            });
    };
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <p className="fs-5 text-center text-primary" closeButton>
                        Please Fill The Form for Buy The Book
                    </p>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="row row-cols-1 row-cols-md-2">
                            <Form.Group className="mb-3 col" controlId="BuyerName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="name"
                                    name="name"
                                    value={user.displayName}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 col" controlId="BuyerName">
                                <Form.Label>Your email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    disabled
                                />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="bookName">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control type="text" value={name} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="bookName">
                            <Form.Label>Book Price</Form.Label>
                            <Form.Control type="text" value={price} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="bookName">
                            <Form.Label>Enter Your Contact</Form.Label>
                            <Form.Control
                                type="text"
                                name="contact"
                                placeholder="enter your mobile number"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="bookName">
                            <Form.Label>Enter meeting Location</Form.Label>
                            <br />
                            <textarea
                                className="w-100 p-2 rounded-3 border-primary"
                                placeholder="enter a meeting Location"
                                name="location"
                                required
                            ></textarea>
                        </Form.Group>
                        <div className="modal-buttons">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button
                                variant="secondary"
                                className="ms-2"
                                onClick={handleClose}
                            >
                                I will Buy Later
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default BookingModal;