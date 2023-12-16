import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GoogleMap from "../../Others/GoogleMap/GoogleMap";
import axios from "axios";

const MapForm = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [pathDistance, setPathDistance] = useState(0);
  const [rider, setRider] = useState();
  const param = useParams();
  const vehicle = param ? param.vehicle : null;
  const forSetRider = rider ? rider.length : 0;
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  const randomNumberForDriver = Math.floor(Math.random() * forSetRider);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/riders/${vehicle}`);
        setRider(response.data);
      } catch (error) {
        console.error("Error fetching riders:", error);
      }
    };

    fetchData();
  }, [vehicle]);
  const selectedDriver = rider ? rider[randomNumberForDriver] : null;
  let cost = 1;
  if (vehicle === "car") {
    cost = 20;
  } else if (vehicle === "bus") {
    cost = 10;
  } else if (vehicle === "bike") {
    cost = 30;
  } else if (vehicle === "plane") {
    cost = 50;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setPathDistance(randomNumber);
    } catch (error) {
      console.error("Error fetching distance:", error);
    }
    setShowResult(true);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    const UserToken = localStorage.getItem("UserToken");
    console.log()
    try {
      const response = await axios.post(
        "http://localhost:3001/ride/booking",
        {
          from: from,
          to: destination,
          rider: selectedDriver._id,
        },
        {
          headers: {
            Authorization: `${UserToken}`,
          },
        }
      );

      if (response) {
        navigate("/confirm/thanks");
      }
    } catch (error) {
      console.error("Error confirming ride:", error);
    }
  };


  return (
    <>
      <div className="flex">
        <div className={`bg-gray-300 w-1/2 p-6 ${showResult ? "hidden" : ""}`}>
          <h2 className="text-xl font-semibold mb-4">
            You have selected {vehicle.vehicle}
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
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Find Route
            </button>
          </form>
        </div>

        <div
          className={`m-20 rounded-xl w-1/2 bg-gray-300 p-6 ${showResult ? "" : "hidden"
            }`}
        >
          <div className="bg-red-400 p-9 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              You have selected {vehicle}
            </h2>
            <div className="mb-2">
              <strong>From:</strong> {from}
            </div>
            <div className="mb-2">
              <strong>Destination:</strong> {destination}
            </div>
            {showResult && (
              <>
                <div className="mb-2">
                  <strong>Path Distance:</strong> {pathDistance} km
                </div>
                <div className="mb-2">
                  <strong>Cost:</strong> {pathDistance * cost} taka
                </div>
                <div className="mb-2">
                  <strong>Driver:</strong> {selectedDriver.username}
                </div>
                <button
                  className="bg-gray-700 p-2 rounded-2xl mt-8"
                  onClick={handleConfirm}
                >
                  Confirm Ride
                </button>
              </>
            )}
          </div>
        </div>

        <div className="rounded-2xl w-1/2 bg-gray-300 p-6 m-20">
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default MapForm;
