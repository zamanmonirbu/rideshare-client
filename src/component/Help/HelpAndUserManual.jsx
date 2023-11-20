import React from "react";

function HelpAndUserManual() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-semibold text-gray-800">Help and User Manual</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Contact Information:</h3>
        <p className="text-gray-600 text-sm">
          Email: <a href="mailto:support@rideshare.com" className="text-blue-500">support@rideshare.com</a>
        </p>
        <p className="text-gray-600 text-sm">Phone: <span className="text-gray-800 font-medium">123-456-7890</span></p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">User Manual:</h3>
        <p className="text-gray-600 text-sm">
          Welcome to our rideshare platform! Our user manual provides all the information you need to get started, book rides, and make the most of your journey. You can download the manual <a href="/user-manual.pdf" className="text-blue-500">here</a>.
        </p>
      </div>
    </div>
  );
}

export default HelpAndUserManual;
