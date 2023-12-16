import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userToken = localStorage.getItem('UserToken');
        const response = await axios.get('http://localhost:3001/my/bookings', {
          headers: {
            Authorization: `${userToken}`,
          },
        });
        setProfileData(response.data[0]); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className=" max-w-2xl mx-auto my-8 p-6  bg-gray-500  rounded-md shadow-md text-white">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h2 className="text-2xl font-bold">{profileData.username}</h2>
            <p>Email: {profileData.email}</p>
          </div>
          <hr className="my-4 border-white" />
          <div>
            <h3 className="text-lg font-bold mb-2">Booking List:</h3>
            {profileData.booking.length > 0 ? (
              <table className="w-full border">
                <thead>
                  <tr>
                    <th className="py-2 border">From</th>
                    <th className="py-2 border">To</th>
                    <th className="py-2 border">Date and Time</th>
                  </tr>
                </thead>
                <tbody>
                  {profileData.booking.map((booking) => (
                    <tr key={booking._id} className="border">
                      <td className="py-2 border">{booking.from}</td>
                      <td className="py-2 border">{booking.to}</td>
                      <td className="py-2 border">{booking.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No bookings yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
