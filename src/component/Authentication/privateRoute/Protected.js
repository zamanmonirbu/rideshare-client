import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
const Protected = () => {
    const location=useLocation();
    const riderAuth=localStorage.getItem('riderToken')
    return (
        <div>
            {
                riderAuth?<Outlet/>:<Navigate to="/rider/login" replace state={{ prevUrl: location.pathname }}/>
            }
            
        </div>
    );
};

export default Protected;