import React, { useState } from 'react';
import axios from 'axios';

const TestingData = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    // Add other fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/test', userData);
      console.log('User details submitted successfully:', response.data);
      // Handle success or navigate to another page
    } catch (error) {
      console.error('Error submitting user details:', error);
      // Handle error, show a message, etc.
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      {/* Add more fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestingData;
