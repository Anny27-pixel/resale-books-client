import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/Banner/img1.jpg';
import img2 from '../../../assets/Banner/img2.jpg';
import img3 from '../../../assets/Banner/img3.jpg';
import img4 from '../../../assets/Banner/img4.jpg';
const Banner = () => {
    return (
        <Carousel className='my-5 '>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100 my-5 mx-auto"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className='text-primary fw-semibold'>
                    <h3>Books spread knowledge</h3>
                    <p>So resale your books and spread knowledge.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100 my-5 mx-auto"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-primary fw-semibold'>
                    <h3>Books spread knowledge</h3>
                    <p>So resale your books and spread knowledge.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100 my-5 mx-auto"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-primary fw-semibold'>
                    <h3>Books spread knowledge</h3>
                    <p>
                        So resale your books and spread knowledge.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '600px' }}
                    className="d-block w-100 my-5 mx-auto"
                    src={img4}
                    alt="Fourth slide"
                />

                <Carousel.Caption className='text-primary fw-semibold'>
                    <h3>Books spread knowledge</h3>
                    <p>
                        So resale your books and spread knowledge.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;