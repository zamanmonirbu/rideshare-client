import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

export default function Header() {
  const { user } = useContext(userContext);
  

  return (
    <nav class="bg-gray-800 p-4">
  <div class="container mx-auto flex justify-between items-center">
    <Link to="#" class="text-white text-lg font-bold">RideShare</Link>
    
    <div class="space-x-4">
      <Link to="/" class="text-white">Home</Link>
      <Link to="/rider/login" class="text-white">Rider</Link>
      <Link to="/review" class="text-white">Reviews</Link>
      <Link to="/blog" class="text-white">Blogs</Link>
      <Link to="/help" class="text-white">Help</Link>
    </div>

    {
    user.photoURL?( <Link to="/user/profile"><img className="w-8 rounded-2xl"  src={user.photoURL} alt="User" /></Link>) :(<div class="space-x-4">
    <Link to="/user/login" class="text-white">SignIn</Link>
    <Link to="/user/register" class="text-white">SignUp</Link>
  </div>)
    
    }

    
  </div>
</nav>


  );
}
