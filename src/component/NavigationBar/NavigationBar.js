import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

export default function Header() {
  const { user } = useContext(userContext);
  

  return (
    <nav className="bg-gray-800 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <Link to="#" className="text-white text-lg font-bold">RideShare</Link>
    
    <div className="space-x-4">
      <Link to="/" className="text-white">Home</Link>
      <Link to="/rider/login" className="text-white">Rider</Link>
      <Link to="/review" className="text-white">Reviews</Link>
      <Link to="/blog" className="text-white">Blogs</Link>
      <Link to="/help" className="text-white">Help</Link>
    </div>

    {
    user.photoURL?( <Link to="/user/profile"><img className="w-8 rounded-2xl"  src={user.photoURL} alt="User" /></Link>) :(<div className="space-x-4">
    <Link to="/user/login" className="text-white">SignIn</Link>
    <Link to="/user/register" className="text-white">SignUp</Link>
  </div>)
    
    }

    
  </div>
</nav>


  );
}
