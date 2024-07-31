import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const RideDetails = () => {
  const navigate = useNavigate();
  const { vehicle } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const from = queryParams.get("from");
  const to = queryParams.get("to");

  const [pathDistance, setPathDistance] = useState(0);
//   const [rider, setRider] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [cost, setCost] = useState(1);

  useEffect(() => {
    const fetchRiderData = async () => {
      try {
        const response = await axios.get(
          `https://ride-share-monir.onrender.com/riders/${vehicle}`
        );
        // setRider(response.data);
        const randomNumberForDriver = Math.floor(Math.random() * response.data.length);
        setSelectedDriver(response.data[randomNumberForDriver]);
      } catch (error) {
        console.error("Error fetching riders:", error);
      }
    };

    fetchRiderData();

    const randomNumber = Math.floor(Math.random() * 20) + 1;
    setPathDistance(randomNumber);

    let costPerKm = 1;
    if (vehicle === "car") {
      costPerKm = 20;
    } else if (vehicle === "bus") {
      costPerKm = 10;
    } else if (vehicle === "bike") {
      costPerKm = 30;
    } else if (vehicle === "plane") {
      costPerKm = 50;
    }
    setCost(costPerKm);

  }, [vehicle]);

  const handleConfirm = async (e) => {
    e.preventDefault();
    const UserToken = localStorage.getItem("UserToken");
    try {
      const response = await axios.post(
        "https://ride-share-monir.onrender.com/ride/booking",
        {
          from: from,
          to: to,
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
//   console.log(selectedDriver?.username)

  return (
    <div className="m-20 rounded-xl w-1/2 bg-gray-300 p-6">
      <div className="p-9 rounded-xl border border-emerald-500">
        <h2 className="text-xl font-semibold mb-4 capitalize">
          You have selected {vehicle}
        </h2>
        <table className="table-auto w-full mb-4 text-left">
          <tbody>
            <tr>
              <td className="pr-4 border-b border-emerald-500"><strong>From:</strong></td>
              <td className="border-b border-emerald-500">{from}</td>
            </tr>
            <tr>
              <td className="pr-4 border-b border-emerald-500"><strong>Destination:</strong></td>
              <td className="border-b border-emerald-500">{to}</td>
            </tr>
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
              <td className="border-b border-emerald-500">{selectedDriver?.username}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="bg-emerald-500 p-2 rounded-xl mt-8 text-white"
          onClick={handleConfirm}
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default RideDetails;
