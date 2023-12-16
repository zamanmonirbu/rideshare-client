import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouMessage = () => {
  return (
    <div>
      <h2>Thank you for using Our App!</h2>
      <p>We appreciate your support and hope you enjoy your experience.</p>
      <Link to='/'><button>Go Home</button></Link>
    </div>
  );
};

export default ThankYouMessage;
