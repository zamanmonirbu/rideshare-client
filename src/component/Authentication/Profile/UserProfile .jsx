import React, { useEffect, useState } from "react";
import axios from "axios"; // for making HTTP requests
import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { getAuth, signOut } from "firebase/auth";
const UserProfile = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const { user, setUser } = useContext(userContext);
  const navigation = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigation('/');
      setUser('');
    }).catch((error) => {
    });
  }
  useEffect(() => {
    // Fetch user's selected vehicle from MongoDB here
    axios.get(`/api/vehicles/${user.selectedVehicleId}`)
      .then(response => {
        setSelectedVehicle(response.data);
      })
      .catch(error => {
        console.error("Error fetching vehicle information:", error);
      });
  }, [user.selectedVehicleId]);



  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      
      <h3>Selected Vehicle</h3>
      {selectedVehicle ? (
        <div>
          <p>Make: {selectedVehicle.make}</p>
          <p>Model: {selectedVehicle.model}</p>
          <p>Year: {selectedVehicle.year}</p>
          
        </div>
      ) : (
        <p>No selected vehicle found</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
