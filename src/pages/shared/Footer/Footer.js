import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/header.png';

const Footer = () => {
    return (
        <div>
            <footer className="py-2 bg-dark text-light text-center">
                <Link
                    to="/home"
                    className="d-flex gap-2 justify-content-center align-items-center"
                >
                    <img src={logo} alt="" width="60px" />
                    <h2>Resale books</h2>
                </Link>
                <hr />
                <p>Jabin Tasmin Anny ||<small> Copy right coming soon !!!</small></p>
            </footer>
        </div>
    );
};

export default Footer;