import React from 'react';
import logo from '../../assets/notFound.webp';

const NotFound = () => {
    return (
        <div className="mt-5 pt-5 text-center">
            <h2 className="text-danger fw-bold text-4xl">404 ERROR</h2>
            <img
                src={logo}
                alt=""
                className="w-1/2 d-block mx-auto"
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default NotFound;