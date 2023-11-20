import React, { useEffect, useState } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import persons from '../Image/persons.png'
import TimeInput from '../Time/Time';
import axios from 'axios';

const MapForm = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {



    // Handle the response as needed
    // console.log(response.data);
    // setShowResult(true); // Show result after form submission



    // Check if the form has been submitted
    // if (showResult) {
    //   fetchData();
    // }
  }, [from, destination]);

  const handleSubmit = (event) => {
    //   axios.post('http://localhost:3001/booking', {
    //     destinationFrom: from,
    //     destinationTo: destination,
    //     timeFrom: '5.6', // Replace with your actual time state
    //     timeTo: '9.45' // Replace with your actual time state
    //   });


    const postData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/booking', {
          destinationFrom: from,
          destinationTo: destination,
          timeFrom: '5.6', // Replace with your actual time state
          timeTo: '9.45'
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    postData();

    event.preventDefault();
    setShowResult(true);
  };

  return (
    <>
      <div className="flex">
        {/* Left side with form */}
        <div className={`bg-gray-300 w-1/2 p-6 ${showResult ? 'hidden' : ''}`}>
          <h2 className="text-xl font-semibold mb-4">Find Your Route</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="from" className="block text-gray-700 font-medium mb-2">
                From:
              </label>
              <input
                required
                type="text"
                id="from"
                className="border rounded px-3 py-2 w-full"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
                Destination:
              </label>
              <input
                required
                type="text"
                id="destination"
                className="border rounded px-3 py-2 w-full"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <TimeInput />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Find Route
            </button>
          </form>
        </div>

        <div className={`m-20 rounded-xl w-1/2 bg-gray-300 p-6 ${showResult ? '' : 'hidden'}`}>
          <div className='bg-red-400 p-9 rounded-xl'>
            <h2 className="text-xl font-semibold mb-4">Your Route Information</h2>

            <div className="mb-2">
              <strong>From:</strong> {from}
            </div>
            <div className="mb-2">
              <strong>Destination:</strong> {destination}
            </div>

          </div>

          <div className="border-t border-gray-400 pt-4 ">
            <div className="mb-4 flex bg-slate-200 pl-20 rounded-xl">
              <strong>Vehicle: Bike</strong>
              <img className='ml-16' src={persons} alt="" />
              <div className='ml-8'> 4</div>
              <div className='ml-20'>$67</div>
            </div>
            <div className="mb-4 flex bg-slate-200 pl-20 rounded-xl">
              <strong>Vehicle: Car</strong>
              <img className='ml-16' src={persons} alt="" />
              <div className='ml-8'> 4</div>
              <div className='ml-20'>$67</div>
            </div>
            <div className="mb-4 flex bg-slate-200 pl-20 rounded-xl">
              <strong>Vehicle: Bike</strong>
              <img className='ml-16' src={persons} alt="" />
              <div className='ml-8'> 4</div>
              <div className='ml-20'>$67</div>
            </div>
            <div className="mb-4 flex bg-slate-200 pl-20 rounded-xl">
              <strong>Vehicle: Airplane</strong>
              <img className='ml-8' src={persons} alt="" />
              <div className='ml-8'> 4</div>
              <div className='ml-20'>$67</div>
            </div>
          </div>

        </div>

        {/* Right side with map section */}
        <div className="rounded-2xl w-1/2 bg-gray-300 p-6 m-20">
          <GoogleMap />
        </div>
      </div>
    </>

  );
};

export default MapForm;
