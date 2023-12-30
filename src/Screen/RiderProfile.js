import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Rider = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const riderToken = localStorage.getItem('riderToken');
        const response = await axios.get('http://localhost:3001/rider', {
          headers: {
            Authorization: `${riderToken}`,
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-4 p-6 bg-white rounded-md shadow-md">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{profileData.username}</h2>
              <p className="text-sm text-gray-500">Email: {profileData.email}</p>
            </div>
            <hr className="my-4 border-t" />
            <div>
              <h3 className="text-lg font-bold mb-2">I Have Completed</h3>
              {profileData.booking.length > 0 ? (
                <table className="w-full border border-collapse bg-white">
                  <thead>
                    <tr className="border-b bg-gray-200">
                      <th className="py-2 border-r">From</th>
                      <th className="py-2">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profileData.booking.map((booking) => (
                      <tr key={booking._id} className="border-b">
                        <td className="py-2 border-r">{booking.from}</td>
                        <td className="py-2">{booking.to}</td>
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
    </div>
  );
};

export default Rider;
