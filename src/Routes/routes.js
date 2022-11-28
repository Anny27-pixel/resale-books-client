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

import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import SellerProducts from "../pages/SellerProducts/SellerProducts";
import Booking from "../pages/Booking/Booking";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductCategory from "../pages/ProductCategory/ProductCategory";


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
                        `https://resale-books-server-anny27-pixel.vercel.app/categories/${params.cid}`
                    ),
                element: <PrivateRoutes><ProductCategory></ProductCategory></PrivateRoutes>
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
                    fetch("https://resale-books-server-anny27-pixel.vercel.app/allseller"),
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allBuyer',
                loader: async () =>
                    fetch("https://resale-books-server-anny27-pixel.vercel.app/allBuyer"),
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
                        `https://resale-books-server-anny27-pixel.vercel.app/sellerProducts/${params.email}`
                    ),
                element: <SellerProducts></SellerProducts>
            },
            {
                path: "/dashboard/myBookings/:email",
                loader: async ({ params }) =>
                    fetch(
                        `https://resale-books-server-anny27-pixel.vercel.app/myBookings/${params.email}`
                    ),
                element: <Booking></Booking>
            }
        ]
    }

])
export default router;