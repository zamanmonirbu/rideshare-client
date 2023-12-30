import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
const UserProtected = () => {
    const location=useLocation();
    const userAuth=localStorage.getItem('UserToken')
    return (
        <div>
            {
                userAuth?<Outlet/>:<Navigate to="/user/login" replace state={{ prevUrl: location.pathname }}/>
            }
            
        </div>
    );
};

export default UserProtected;