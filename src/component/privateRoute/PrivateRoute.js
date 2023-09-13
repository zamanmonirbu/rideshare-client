import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = (props) => {

    const { Component } = props;
    const navigation = useNavigate()
    useEffect(() => {
        const login = localStorage.getItem('login')
        if (!login) {
            navigation('/login')
        }
    })
    return (
        <div>
            <Component />
        </div>
    );
};

export default ProtectedRoute;