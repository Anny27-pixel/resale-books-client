import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";
const Main = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>

            <section id="footer">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Main;