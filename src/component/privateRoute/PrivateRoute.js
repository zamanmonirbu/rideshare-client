import React, { useContext } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
const ProtectedRoute = () => {
    const location=useLocation();
    const {user}=useContext(userContext);
    const auth=localStorage.getItem('UserToken')
    console.log("Auth",auth,user);
    return (
        <div>
            {
                auth?<Outlet/>:<Navigate to="/user/login" replace state={{ prevUrl: location.pathname }}/>
            }
        </div>
    );
};

export default ProtectedRoute;