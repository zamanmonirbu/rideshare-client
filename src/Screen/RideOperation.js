import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import carIcon from '../component/Image/car.png'; 
import busIcon from '../component/Image/bus.png';
import bikeIcon from '../component/Image/bike.png';
import airplaneIcon from '../component/Image/airplane.png';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../component/Image/bg-img.gif'; // Update with your background image path

const RideOptions = () => {
  const [vehicle, setVehicle] = useState('');
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false to allow multiple triggers
    threshold: 0.1, // Adjust this value as needed
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehicle && from && destination) {
      navigate(`/ride-details/${vehicle}?from=${from}&to=${destination}`);
    }
  };

  return (
    <div
      className={`min-h-screen bg-cover bg-center bg-slate-200 transition-opacity duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      ref={ref}
    >
      <div className="flex flex-col backdrop-blur-sm bg-white/60 min-h-screen">
        <form className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 py-12 px-4" onSubmit={handleSubmit}>
          <div className='w-full md:w-auto'>
            <label htmlFor="vehicle" className="block text-gray-700 font-medium mb-2">Select Vehicle:</label>
            <select
              id="vehicle"
              className="border rounded px-3 py-2 w-full outline-none focus:outline-red-500"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            >
              <option value="">Select Vehicle</option>
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="bike">Bike</option>
              <option value="plane">Airplane</option>
            </select>
          </div>

          <div className='w-full md:w-auto'>
            <label htmlFor="from" className="block text-gray-700 font-medium mb-2">From:</label>
            <input
              type="text"
              id="from"
              className="border rounded px-3 py-2 w-full outline-none focus:outline-red-500"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          <div className='w-full md:w-auto'>
            <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">Destination:</label>
            <input
              type="text"
              id="destination"
              className="border rounded px-3 py-2 w-full outline-none focus:outline-red-500"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <button type="submit" className="self-center md:self-auto bg-emerald-500 text-white px-4 py-2 rounded">Find Route</button>
        </form>

        <div className="flex-grow bg-opacity-90">
          <div className="md:flex justify-center space-x-8 p-8">
            <div className="text-white text-center my-20">
              <img src={carIcon} alt="Car Icon" className="w-12 h-12 mx-auto mb-2" />
              <h2 className="text-xl font-semibold text-black">Car</h2>
              <p className="text-black">Comfortable and convenient</p>
              <Link to="/mapView/car">
                <button className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded">Take Ride</button>
              </Link>
            </div>
            
            <div className="text-white text-center my-20">
              <img src={busIcon} alt="Bus Icon" className="w-12 h-12 mx-auto mb-2" />
              <h2 className="text-xl font-semibold text-black">Bus</h2>
              <p className="text-black">Economical and scenic</p>
              <Link to="/mapView/bus">
                <button className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded">Take Ride</button>
              </Link>
            </div>
            
            <div className="text-white text-center my-20">
              <img src={bikeIcon} alt="Bike Icon" className="w-12 h-12 mx-auto mb-2" />
              <h2 className="text-xl font-semibold text-black">Bike</h2>
              <p className="text-black">Quick and eco-friendly</p>
              <Link to="/mapView/bike">
                <button className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded">Take Ride</button>
              </Link>
            </div>
            
            <div className="text-white text-center my-20">
              <img src={airplaneIcon} alt="Airplane Icon" className="w-12 h-12 mx-auto mb-2" />
              <h2 className="text-xl font-semibold text-black">Airplane</h2>
              <p className="text-black">Fast and long-distance</p>
              <Link to="/mapView/plane">
                <button className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded">Take Ride</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideOptions;
