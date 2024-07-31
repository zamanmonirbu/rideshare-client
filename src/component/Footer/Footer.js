import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-10 px-6">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Download our app</h3>
          <p>Stay connected All day, every day.</p>
          <div className="flex flex-col sm:flex-row justify-center my-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center border rounded-lg px-4 py-2 mx-auto w-full max-w-xs sm:max-w-none sm:w-auto">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Google Play Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 mx-auto w-full max-w-xs sm:max-w-none sm:w-auto">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
                alt="Apple Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col sm:flex-row sm:justify-between items-center text-sm text-gray-400">
          <p className="mt-8 sm:mt-0 order-2 sm:order-1">&copy; Niye Jao, 2024.</p>
          <div className="order-1 sm:order-2 flex space-x-4">
            <Link to='/help'><span>About us</span></Link>
            <Link to='/help'><span>Contact us</span></Link>
            <Link to='/policy'><span>Privacy Policy</span></Link>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
