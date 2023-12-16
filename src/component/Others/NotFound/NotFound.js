import React from 'react';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-200'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-red-500'>Page not found! 404</h1>
        <p className='text-gray-600'>The requested page could not be found.</p>
      </div>
    </div>
  );
};

export default NotFound;
