import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import userProfile from "../Image/profile.png";
import riderProfile from "../Image/person.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
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
    localStorage.removeItem("Username");
    history("/");
  };
  const handleRiderLogout = () => {
    localStorage.removeItem("riderToken");
    history("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto sm:flex justify-between items-center">
        <Link to="#" className="text-white text-lg font-bold">
          Niye Jao
        </Link>
        <div className="inline sm:hidden">
          <button onClick={toggleMenu} className="text-white ml-[85%]">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`w-full sm:flex sm:items-center sm:justify-between sm:w-auto ${menuOpen ? 'block' : 'hidden'} sm:block space-y-2 sm:space-y-0 mt-4 sm:mt-0`}>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <Link to="/" className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800 ">
              Home
            </Link>
            {!user && !rider ? (
              <Link to="/rider/profile" className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800">
                Rider
              </Link>
            ) : null}
            <Link to="/review" className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800">
              Reviews
            </Link>
            <Link to="/blog" className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800">
              Blogs
            </Link>
            <Link to="/help" className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800">
              Help
            </Link>
          </div>

          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/user/profile">
                <img className="w-8 rounded-2xl" src={userProfile} alt="User" />
              </Link>
              <button className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : null}
          {rider ? (
            <div className="flex items-center space-x-4">
              <Link to="/rider/profile">
                <img className="w-8 rounded-2xl" src={riderProfile} alt="Rider" />
              </Link>
              <button className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800" onClick={handleRiderLogout}>
                Logout
              </button>
            </div>
          ) : null}
          {!user && !rider ? (
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2 sm:mt-0">
              <Link to="/user/login" className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800">
                SignIn
              </Link>
              <Link to="/user/register" className="text-white hover:text-black hover:bg-gray-100 block p-2 sm:hover:text-white sm:hover:bg-gray-800">
                SignUp
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
