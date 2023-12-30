import React from "react";

const HelpMoreDetails = () => {
  return ( 
    <>
    <h1 className="md:text-5xl text-sm text-gray-800 my-20">Two ways to get started with Niye Jao for Business</h1>
    <div className="md:flex items-center mx-28">
      <div className="md:flex-1  text-left mb-8 mr-8">
        <img
          src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_558,h_314/v1676485664/assets/a8/dc747f-3aa3-4cdb-8474-9b3727e44d72/original/ub4-gettingstarted-selfserve.svg"
          alt="Left"
          className="w-full h-auto rounded"
        />
        <p className="mt-2 font-bold my-4">
          1. A self-serve approach to get set up in minutes
        </p>
        <ul className="list-disc">
          <li>The fastest way to sign up for companies of all sizes</li>
          <li>
            Streamlined expensing, and the ability to pay with one credit card
            with zero service fees
          </li>
          <li>
            Access to dashboard features, including integrations with leading
            expense platforms, sustainability metrics, and customer support
          </li>
        </ul>
      </div>
      <div className="flex-1 text-left mb-8 ">
        <img
          src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_558,h_314/v1676485955/assets/1a/5eb943-771c-4ac2-8cb3-e9cb65a8a408/original/ub4-gettingstarted-assistance.svg"
          alt="Right"
          className="w-full h-auto rounded"
        />
        <p className="mt-2 font-bold my-4">
          2. A tailored experience to fit your company’s needs
        </p>
        <ul className="list-disc">
          <li>For companies with more than 250 employees</li>
          <li>
            Streamlined expensing, ability to manage multiple payment methods,
            invoicing support, and zero service fees
          </li>
          <li>
            Access to dashboard features, including integrations, sustainability
            metrics, and a dedicated support team
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default HelpMoreDetails;
