import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RiderRegistrationComponent = () => {
  const navigate=useNavigate();
  const baseUrl = 'http://localhost:3001';
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    vehicle: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post(`${baseUrl}/rider/register`, formData);
      console.log(response.data.message);
      if(response.data.message==="Registration successful"){
        navigate('/rider/login')
      }
    } catch (error) {
      console.error('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center my-8">
    
      <div className="max-w-md w-full p-6 bg-gray-400 rounded-md shadow-md">
      <h1 className='text-2xl font-sans font-bold pb-10'>Rider Registration</h1>
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
          Username
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="text"
          placeholder="Enter your username"
          name="username"
          onChange={handleInputChange}
        />

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

        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="gender">
          Gender
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="text"
          placeholder="Enter your gender"
          name="gender"
          onChange={handleInputChange}
        />

        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="vehicle">
          Vehicle
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="text"
          placeholder="Enter your vehicle"
          name="vehicle"
          onChange={handleInputChange}
        />

        <button
          className="bg-emerald-500  text-white p-2 rounded-md hover:bg-emerald-700"
          onClick={handleRegistration}
        >
          Register
        </button>

        <div className='text-blue-500 underline mt-4'>
        <Link to="/rider/login">
          Already have an account?
        </Link>
        </div>
      </div>
    </div>
  );
};

export default RiderRegistrationComponent;
