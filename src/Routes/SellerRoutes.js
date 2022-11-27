import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import useSeller from '../Hooks/useSeller';
import Loading from '../pages/shared/Loading/Loading';

const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    console.log(isSeller);

    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        console.log(isSeller);
        return children;
    } else console.log(isSeller);

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default SellerRoutes;