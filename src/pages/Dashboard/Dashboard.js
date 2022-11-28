import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <section
            id="nav"
            className="p-3 rounded-3 "
            style={{ position: "sticky", top: "700px" }}
        >
            <h1 className='d-flex justify-content-center fw-bold text-primary mt-5'> Dashboard</h1>
            <div className="dashboard-links d-flex flex-wrap justify-content-center d-md-block  my-5">
                <Link to="allSeller" className="btn btn-outline-primary m-3">
                    All Seller
                </Link>
                <Link to="addProduct" className="btn btn-outline-primary m-3">
                    Add Product
                </Link>
                <Link
                    to={`myProducts/${user.email}`}
                    className="btn btn-outline-primary m-3"
                >
                    My Products
                </Link>
                <Link to="allBuyer" className="btn btn-outline-primary m-3">
                    All Buyer
                </Link>
                <Link
                    to={`myBookings/${user.email}`}
                    className="btn btn-outline-primary m-3"
                >
                    My Bookings
                </Link>
            </div>
        </section>
    );
};

export default Dashboard;