import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GoogleMap from "../component/GoogleMap";

const MapForm = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const param = useParams();
  const vehicle = param ? param.vehicle : null;


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/ride-details/${vehicle}?from=${from}&to=${destination}`);
  };

  return (
    <>
      <div className="md:flex">
        <div className={`bg-gray-300 w-1/2 p-6`}>
          <h2 className="text-xl font-semibold mb-4">
            You have selected {vehicle?.vehicle}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="from"
                className="block text-gray-700 font-medium mb-2"
              >
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
              <label
                htmlFor="destination"
                className="block text-gray-700 font-medium mb-2"
              >
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
            <button
              type="submit"
              className="bg-emerald-500 text-white px-4 py-2 rounded"
            >
              Find Route
            </button>
          </form>
        </div>

        <div className="rounded-2xl w-1/2 p-6 flex items-center justify-center">
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default MapForm;
