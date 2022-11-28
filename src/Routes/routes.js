import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from '../layouts/Main';
import Buyers from "../pages/AllBuyer/Buyers";
import AllSeller from "../pages/AllSeller/AllSeller";
import Blog from "../pages/Blog/Blog";
import Categories from "../pages/Home/Categories/Categories";
import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/ProductCategory/Product";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import SellerProducts from "../pages/SellerProducts/SellerProducts";
import Booking from "../pages/Booking/Booking";
import AddProduct from "../pages/AddProduct/AddProduct";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/allSeller',
                element: <PrivateRoutes><AllSeller></AllSeller></PrivateRoutes>
            },
            {
                path: "categories/:cid",
                loader: async ({ params }) =>
                    fetch(
                        `http://localhost:5000/categories/${params.cid}`
                    ),
                element: <PrivateRoutes><Product></Product></PrivateRoutes>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/allSeller',
                loader: async () =>
                    fetch("http://localhost:5000/allseller"),
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allBuyer',
                loader: async () =>
                    fetch("http://localhost:5000/allBuyer"),
                element: <Buyers></Buyers>
            },
            {
                path: "/dashboard/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/dashboard/myProducts/:email",
                loader: async ({ params }) =>
                    fetch(
                        `http://localhost:5000/sellerProducts/${params.email}`
                    ),
                element: <SellerProducts></SellerProducts>
            },
            {
                path: "/dashboard/myBookings/:email",
                loader: async ({ params }) =>
                    fetch(
                        `http://localhost:5000/myBookings/${params.email}`
                    ),
                element: <Booking></Booking>
            }
        ]
    }

])
export default router;