import React from 'react';
import { Link } from 'react-router-dom';


const HelpAndUserManual = () => {
  return (
    <div className="text-left md:flex md:items-center p-4 my-4 rounded-lg ">
      <div className="flex-1 p-8">
        <p className="md:text-5xl text-xl font-bold md:mt-12">The best of Niye </p><p className="md:text-5xl text-xl  font-bold mb-12  my-4 "> Jao for your business</p>
        <h2>Niye Jao for Business gives your organization more control, deeper insights, and features built for enterprise users. Manage and track business travel, meal programs, and more on one dashboard.</h2>

        <div className=" my-4">
         <Link to='/view/help/more'>
         <button className="md:mr-4 bg-blue-500 text-white px-4 py-2 my-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            How to get started
          </button>
         </Link>
         <Link to='/view/help/more'>
          <button className="bg-green-500  text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green">
            Check out our solutions
          </button>
          </Link>
        </div>
      </div>

      {/* Right side with image */}
      <div className="flex-1">
        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_558/v1685006943/assets/07/61a159-ae6b-4821-bcb4-83aaf8c4bdf6/original/220428_UBER_CDMX_M-DT1-A_001035_VS_R2.jpg" alt="i" className="w-full h-auto rounded" />
      </div>
    </div>
  );
};

export default HelpAndUserManual;
