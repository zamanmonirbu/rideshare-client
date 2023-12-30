import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Error from '../../SideEffects/Error'
const RiderLogin = () => {
  const [error,setError]=useState(false);
  const [rider,setRider]=useState()
  const location=useLocation();
  const navigate=useNavigate();
  const baseUrl = "http://localhost:3001";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/rider/login`, formData);

      if(response.data.token){
        localStorage.setItem("riderToken",response.data.token);
        setRider(response.data.token);
      }
    } catch (error) {
      console.error("Login failed. Invalid email or password",error);
      setError(true)
    }
  };

  useEffect(()=>{
    if(rider && location?.state?.prevUrl){
      navigate(location?.state?.prevUrl);
    }
    else if(rider && !(location?.state?.prevUrl)){
      navigate('/')
    }

  },[rider,navigate,location?.state?.prevUrl])

  return (
    <div className="flex items-center justify-center h-screen">
     
      <div className="max-w-md w-full p-6 bg-gray-400 rounded-md shadow-md">
      {error && <Error/>}
      <h1 className='text-2xl font-sans font-bold pb-10'>Rider Login</h1>
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

        <button
          className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-700"
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="text-blue-500 underline mt-4">
          <Link to="/rider/register">
            Don't have an account? Register here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RiderLogin;
