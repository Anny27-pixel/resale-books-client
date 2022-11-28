import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="pt-5">
                <div className="container my-5">
                    <div className="row mt-5 g-2">
                        <div className="col-md-3">
                            <Dashboard></Dashboard>
                        </div>
                        <div className="col-md-9">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;