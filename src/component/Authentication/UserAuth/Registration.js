import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const baseUrl = "http://localhost:3001";
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post(`${baseUrl}/user/register`, formData);
      // console.log(response.data.message); 
      if(response.data.message==="Registration successful"){
        navigate('/user/login')
      }
    } catch (error) {
      console.error("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      
      <div className="max-w-md w-full p-6 bg-gray-400 rounded-md shadow-md my-10">
      <h1 className='text-2xl font-sans font-bold pb-10'>User Registration</h1>
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="text"
          placeholder="Enter your username"
          name="username"
          onChange={handleInputChange}
        />

        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleInputChange}
        />

        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleInputChange}
        />

        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="gender"
        >
          Gender
        </label>
        <input
          className="mb-4 p-2 w-full border rounded-md"
          type="text"
          placeholder="Enter your gender"
          name="gender"
          onChange={handleInputChange}
        />

        <button
          className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-900"
          onClick={handleRegistration}
        >
          Register
        </button>

        <div className="text-blue-700 underline mt-4">
          <Link to="/user/login">Already have an account? Login here.</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
