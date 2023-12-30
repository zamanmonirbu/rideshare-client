import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userProfile from "../Image/profile.png";
import riderProfile from "../Image/person.png";

export default function Header() {
  let user = localStorage.getItem("UserToken");
  let rider = localStorage.getItem("riderToken");
  if (user) {
    rider = localStorage.removeItem("riderToken", null);
  }
  if (rider) {
    user = localStorage.removeItem("UserToken", null);
  }

  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("UserToken");
    history("/");
  };
  const handleRiderLogout = () => {
    localStorage.removeItem("riderToken");
    history("/");
  };

  return (
    <nav className="bg-gray-800 p-4 text-left">
      <div className="container md:mx-auto sm:flex justify-between items-center">
        <Link to="#" className="text-white block sm:inline text-lg font-bold">
          Niya Jao
        </Link>

        <div className="md:space-x-4">
          <Link to="/" className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800  ">
            Home
          </Link>
          {!user && !rider ? (
            <Link to="/rider/profile" className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800 ">
              Rider
            </Link>
          ) : null}
          <Link to="/review" className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800 ">
            Reviews
          </Link>
          <Link to="/blog" className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800 ">
            Blogs
          </Link>
          <Link to="/help" className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800 ">
            Help
          </Link>
        </div>

        {user ? (
          <div className="sm:flex items-center sm:space-x-4">
            <Link to="/user/profile">
              <img className="w-8 rounded-2xl block sm:inline" src={userProfile} alt="User" />
            </Link>
            <button className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800 " onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : null}
        {rider ? (
          <div className="sm:flex items-center sm:space-x-4">
            <Link to="/rider/profile">
              <img className="w-8 rounded-2xl block sm:inline" src={riderProfile} alt="User" />
            </Link>
            <button className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800 " onClick={handleRiderLogout}>
              Logout
            </button>
          </div>
        ) : null}
        {!user && !rider ? (
          <div className="md:space-x-4">
            <Link to="/user/login" className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800 ">
              SignIn
            </Link>
            <Link to="/user/register" className="text-white hover:text-black hover:bg-gray-100 block sm:inline p-2  sm:hover:text-white sm:hover:bg-gray-800 ">
              SignUp
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
