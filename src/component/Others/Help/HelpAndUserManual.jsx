import React from "react";

function HelpAndUserManual() {
  return (
    <div className="max-w-4xl my-12 mx-auto bg-gray-500 rounded-lg shadow-md p-6 flex">
      <div className="w-1/2 pr-8">
        <h2 className="text-3xl font-semibold text-white mb-4">User Manual</h2>
        <p className="text-gray-300 text-lg">
        "Welcome to our rideshare platform! Our user manual is your comprehensive guide to kickstarting your journey with us. This document equips you with all the essential information required for a seamless experience – from the initial setup to booking rides and maximizing the enjoyment of your travels. Dive into the manual to discover step-by-step instructions, tips, and insights that empower you to make the most of our rideshare services. Whether you're a first-time user or a seasoned traveler, this guide is designed to cater to your needs. Download the manual now to embark on a hassle-free and enjoyable rideshare adventure. We believe in providing you with the tools and knowledge necessary for a smooth and satisfying journey every time you ride with us. Your comfort and convenience are our top priorities, and this user manual is crafted to ensure you have all the details at your fingertips. Let's make every ride memorable!" <a href="/user-manual.pdf" className="text-blue-300">here</a>.
        </p>
      </div>
      <div className="w-1/2">
        <h3 className="text-2xl font-semibold text-white mb-4">Contact Information:</h3>
        <p className="text-gray-300 text-lg">
          Email: <a href="mailto:support@rideshare.com" className="text-blue-300">support@rideshare.com</a>
        </p>
        <p className="text-gray-300 text-lg">Phone: <span className="text-white font-medium">123-456-7890</span></p>
        
      </div>
    </div>
  );
}

export default HelpAndUserManual;
