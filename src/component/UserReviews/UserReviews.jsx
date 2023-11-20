import React from "react";

function Review({ rating, comment }) {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="text-yellow-400 text-xl">
      ★
    </span>
  ));

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center">
        <div className="mr-2">{stars}</div>
        <p className="text-gray-600 text-sm">User</p>
      </div>
      <p className="text-gray-700 mt-2">{comment}</p>
    </div>
  );
}

function RideSection({ name, rating, reviewCount }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <div className="flex items-center mt-2">
        <div className="mr-2">{rating}</div>
        <p className="text-gray-600 text-sm">({reviewCount} reviews)</p>
      </div>
      {/* Add other ride-specific information here */}
    </div>
  );
}

function UserReviews() {
  const dummyRides = [
    { name: "Tacos", rating: 5.0, reviewCount: 16 },
    // Add more ride sections as needed
  ];

  const dummyReviews = [
    { rating: 5, comment: "Great experience with the service." },
    { rating: 4, comment: "I enjoyed the ride. Friendly driver." },
    // Add more reviews as needed
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow-md border p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Reviews</h2>
        {dummyRides.map((ride, index) => (
          <RideSection
            key={index}
            name={ride.name}
            rating={ride.rating}
            reviewCount={ride.reviewCount}
          />
        ))}
        {dummyReviews.map((review, index) => (
          <Review key={index} rating={review.rating} comment={review.comment} />
        ))}
      </div>
    </div>
  );
}

export default UserReviews;
