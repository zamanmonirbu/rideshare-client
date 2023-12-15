import React from 'react';
import carIcon from '../Image/car.png'; // Replace with actual icon paths
import busIcon from '../Image/bus.png';
import bikeIcon from '../Image/bike.png';
import airplaneIcon from '../Image/airplane.png';
import { Link } from 'react-router-dom';

const RideOptions = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center bg-gray-300"
    >
      <div className="flex justify-center space-x-8">
        <div className="text-white text-center">
        <img src={carIcon} alt="Bus Icon" className="w-12 h-12 mx-auto mb-2" />

          <h2 className="text-xl font-semibold text-black">Car</h2>
          <p class="text-black">Comfortable and convenient</p>
          <Link to="/mapView/car"> <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Take Ride</button> </Link>
          
        </div>
        
        <div className="text-white text-center">
          <img src={busIcon} alt="Bus Icon" className="w-12 h-12 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-black">Bus</h2>
          <p class="text-black">Economical and scenic</p>
          <Link to="/mapView/bus"> <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Take Ride</button> </Link>
        </div>
        
        <div className="text-white text-center">
          <img src={bikeIcon} alt="Bike Icon" className="w-12 h-12 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-black">Bike</h2>
          <p class="text-black">Quick and eco-friendly</p>
          <Link to="/mapView/bike"> <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Take Ride</button> </Link>
        </div>
        
        <div className="text-white text-center">
          <img src={airplaneIcon} alt="Airplane Icon" className="w-12 h-12 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-black">Airplane</h2>
          <p class="text-black">Fast and long-distance</p>
          <Link to="/mapView/plane"> <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Take Ride</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default RideOptions;
