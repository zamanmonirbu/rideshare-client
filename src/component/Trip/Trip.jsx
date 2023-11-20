import React from "react";

function Trip() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-semibold text-gray-800">Trip Details</h2>
      <div className="mt-4">
        <p className="text-gray-600 text-sm">Trip Name: <span className="text-gray-800 font-medium">Summer Adventure</span></p>
        <p className="text-gray-600 text-sm">Date: <span className="text-gray-800 font-medium">July 15, 2023</span></p>
        <p className="text-gray-600 text-sm">Destination: <span className="text-gray-800 font-medium">Beach Paradise</span></p>
        <p className="text-gray-600 text-sm">Duration: <span className="text-gray-800 font-medium">7 days</span></p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Description:</h3>
        <p className="text-gray-600 text-sm">Pack your bags and get ready for an unforgettable summer adventure at the beautiful Beach Paradise. This 7-day trip will be filled with sun, sea, and lots of fun activities. Don't miss out!</p>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Trip;
