import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-900 ">
      <div className="max-w-2xl md:mx-auto text-white py-10">
        <div className="md:text-center text-left">
          <h3 className="text-3xl mb-3">Download our app</h3>
          <p>Stay connected All day, every day.</p>
          <div className="md:flex justify-center my-10">
            <div className="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2">
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
            <div className="md:flex items-center border md:w-auto w-52 rounded-lg px-4 py-2  mx-2">
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
        <div className="mt-28 md:flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 text-left">
          <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; Niye Jao, 2023.</p>
          <div className="order-1 md:order-2">
           <Link to='/help'> <span className="px-2">About us</span></Link>
           <Link to='/help'> <span className="px-2">Contact us</span></Link>
           <Link to='/policy'> <span className="px-2">Privacy Policy</span></Link>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
