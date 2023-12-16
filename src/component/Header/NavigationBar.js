import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userProfile from "../Others/Image/profile.png";
import riderProfile from "../Others/Image/person.png";

export default function Header() {
  let user = localStorage.getItem("UserToken");
  let rider = localStorage.getItem("riderToken");
  if (user) {
    rider=localStorage.removeItem("riderToken", null);
  }
  if (rider) {
    user=localStorage.removeItem("UserToken", null);
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
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="#" className="text-white text-lg font-bold">
          Niya Jao
        </Link>

        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          {(!user && !rider )? (
            <Link to="/rider/profile" className="text-white">
              Rider
            </Link>
          ): null }
          <Link to="/review" className="text-white">
            Reviews
          </Link>
          <Link to="/blog" className="text-white">
            Blogs
          </Link>
          <Link to="/help" className="text-white">
            Help
          </Link>
        </div>
        

        {(user )? (
          <div className="flex items-center space-x-4">
            <Link to="/user/profile">
              <img className="w-8 rounded-2xl" src={userProfile} alt="User" />
            </Link>
            <button className="text-white" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) :null}
        {rider ? (
          <div className="flex items-center space-x-4">
            <Link to="/rider/profile">
              <img className="w-8 rounded-2xl" src={riderProfile} alt="User" />
            </Link>
            <button className="text-white" onClick={handleRiderLogout}>
              Logout
            </button>
          </div>
        ) :null}
        {
          (!user&&!rider)? (
          <div className="space-x-4">
            <Link to="/user/login" className="text-white">
              SignIn
            </Link>
            <Link to="/user/register" className="text-white">
              SignUp
            </Link>
          </div>
        ):null
        }
      </div>
    </nav>
  );
}
