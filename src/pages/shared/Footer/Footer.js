import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/bookLogo.png';

const Footer = () => {
    return (
        <div>
            <footer className="py-2 bg-dark text-light text-center">
                <Link
                    to="/home"
                    className="d-flex gap-2 justify-content-center align-items-center text-decoration-none"
                >
                    <img src={logo} alt="" width="60px" />
                    <h2 >Resale books</h2>
                </Link>
                <hr />
                <p className='text-primary'>Jabin Tasmin Anny ||<small> Copy right coming soon !!!</small></p>
            </footer>
        </div>
    );
};

export default Footer;