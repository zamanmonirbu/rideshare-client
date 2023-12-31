import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GoogleMap from "../component/GoogleMap";
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
        const response = await axios.get(
          `https://ride-share-monir.onrender.com/riders/${vehicle}`
        );
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
    console.log();
    try {
      const response = await axios.post(
        "https://ride-share-monir.onrender.com/ride/booking",
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
      <div className="md:flex">
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
              className="bg-emerald-500 text-white px-4 py-2 rounded"
            >
              Find Route
            </button>
          </form>
        </div>

        <div
          className={`m-20 rounded-xl w-1/2 bg-gray-300 p-6 ${
            showResult ? "" : "hidden"
          }`}
        >
           <div className="p-9 rounded-xl border border-emerald-500">
      <h2 className="text-xl font-semibold mb-4 capitalize">
        You have selected {vehicle}
      </h2>
      <table className="table-auto w-full mb-4  text-left">
        <tbody>
          <tr>
            <td className="pr-4 border-b border-emerald-500"><strong>From:</strong></td>
            <td className="border-b border-emerald-500">{from}</td>
          </tr>
          <tr>
            <td className="pr-4 border-b border-emerald-500"><strong>Destination:</strong></td>
            <td className="border-b border-emerald-500">{destination}</td>
          </tr>
          {showResult && (
            <>
              <tr>
                <td className="pr-4 border-b border-emerald-500"><strong>Path Distance:</strong></td>
                <td className="border-b border-emerald-500">{pathDistance} km</td>
              </tr>
              <tr>
                <td className="pr-4 border-b border-emerald-500"><strong>Cost:</strong></td>
                <td className="border-b border-emerald-500">{pathDistance * cost} taka</td>
              </tr>
              <tr>
                <td className="pr-4 border-b border-emerald-500"><strong>Driver:</strong></td>
                <td className="border-b border-emerald-500">{selectedDriver.username}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      {showResult && (
        <button
          className="bg-emerald-500 p-2 rounded-xl mt-8 text-white"
          onClick={handleConfirm}
        >
          Confirm Ride
        </button>
      )}
    </div>
        </div>

        <div className="rounded-2xl w-1/2 p-6 flex items-center justify-center">
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default MapForm;
