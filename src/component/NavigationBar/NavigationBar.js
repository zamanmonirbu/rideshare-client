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
      <Link to="rides" class="text-white">Rides</Link>
      <Link to="about" class="text-white">About</Link>
      <Link to="contact" class="text-white">Contact</Link>
    </div>

    {
    user.photoURL?( <Link to="/user/profile"><img className="w-8 rounded-2xl"  src={user.photoURL} alt="User" /></Link>) :(<div class="space-x-4">
    <Link to="/login" class="text-white">SignIn</Link>
    <Link to="/register" class="text-white">SignUp</Link>
  </div>)
    
    }

    
  </div>
</nav>


  );
}
