import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const baseUrl = "http://localhost:3001";
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/user/login`, formData);
      // console.log('Login successful. Token:', response.data.token);
      // You can store the token in local storage or a state management system
      if(response.data.token){
        localStorage.setItem("UserToken",response.data.token);
        navigate('/user/profile')
      }
    } catch (error) {
      console.error('Login failed. Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
   
      <div className="max-w-md w-full p-6 bg-gray-400 rounded-md shadow-md">
      <h1 className='text-2xl font-sans font-bold pb-10'>User Login</h1>
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleInputChange}
        />

        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleInputChange}
        />

        <button
          className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-900"
          onClick={handleLogin}
        >
          Login
        </button>

        <div className='text-blue-500 underline mt-4'>
          <Link to="/user/register">
            Don't have an account? Register here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
