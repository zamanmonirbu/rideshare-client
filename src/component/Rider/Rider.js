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
        setProfileData(response.data[0]); // Assuming there's only one rider in the array
        console.log(response.data[0])
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h2 className="text-xl font-bold">{profileData.username}</h2>
            <p>Email: {profileData.email}</p>
          </div>
          <hr className="my-4 border-t" />
          <div>
            <h3 className="text-lg font-bold">Booking List:</h3>
            {profileData.booking.length > 0 ? (
              <ul>
                {profileData.booking.map((booking) => (
                  <li key={booking._id}>
                    <strong>From:</strong> {booking.from}, <strong>To:</strong> {booking.to}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No bookings yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Rider;
