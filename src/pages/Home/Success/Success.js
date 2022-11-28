import React from 'react';
import CountUp from "react-countup";
const Success = () => {
    return (
        <div className=" mt-5 text-light ">
            <h1 className="d-flex justify-content-center fw-bold text-primary">Our Success Rate</h1>
            <div className="bg-info container  py-5 my-5 rounded">
                <div className="my-5 d-flex flex-wrap gap-4 justify-content-around ">
                    <div className='border border-success py-2 px-5 rounded'>
                        <h1 className='my-4'>
                            <CountUp
                                end={100}
                                duration={5}
                                delay={1}
                                enableScrollSpy={true}
                            ></CountUp>
                        </h1>
                        <h4>Seller</h4>
                    </div >
                    <div className='border border-success py-2 px-5 rounded'>
                        <h1 className='my-4'>
                            <CountUp
                                end={1500}
                                duration={12}
                                delay={1}
                                enableScrollSpy={true}
                            ></CountUp>
                        </h1>
                        <h4>Buyer</h4>
                    </div>
                    <div className='border border-success py-2 px-5 rounded'>
                        <h1 className='my-4'>
                            <CountUp
                                end={850}
                                duration={7}
                                delay={1}
                                enableScrollSpy={true}
                            ></CountUp>
                        </h1>
                        <h4>Books</h4>
                    </div>
                    <div className='border border-success py-2 px-5 rounded'>
                        <h1 className='my-4'>
                            <CountUp
                                end={400}
                                duration={10}
                                delay={1}
                                enableScrollSpy={true}
                            ></CountUp>
                        </h1>
                        <h4>Sold Out</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;