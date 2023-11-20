import React, { useContext } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
const ProtectedRoute = () => {
    const location=useLocation();
    const {user}=useContext(userContext);
    return (
        <div>
            {
                user?<Outlet/>:<Navigate to="/login" replace state={{ prevUrl: location.pathname }}/>
            }
        </div>
    );
};

export default ProtectedRoute;