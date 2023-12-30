import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouMessage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-500 to-white text-black">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Thank you for using Our App!</h2>
        <p className="text-lg mb-6">We appreciate your support and hope you enjoy your experience.</p>
        <Link to='/'>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 focus:outline-none focus:shadow-outline-gray">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouMessage;
