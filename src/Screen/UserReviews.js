import React from "react";

function Review({user, rating, comment }) {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className="text-yellow-400 text-xl">
      ★
    </span>
  ));

  return (
    <div className="bg-white rounded-lg shadow-2xl p-4 mb-4">
      <div className="">
        <div className="mr-2 ">{stars}</div>
        <p className="text-gray-600 text-sm text-left">{user}</p>
      </div>
      <p className="text-gray-700 mt-2">{comment}</p>
    </div>
  );
}

function UserReviews() {
  const dummyReviews = [
    {user:"monir", rating: 5, comment: "We just came back from a wonderful 6 days trip in Sri Lanka. Our drivers, Asanka and Sahlan, were extremely kind, friendly and always did their best to satisfy all our demands. We felt very safe. The car was clean and confortable and we couldn't wish for a better service. On the top of that, after checking with more than douzain of travel agencies, price was the most competitive. Go for it !!!!!!" },
    { rating: 4, comment: "Strongly recommend tour driver in Sri Lanka. Bala(77-2993730) is an experienced guide you can fully trusted. He will adjust schedule on our request and give helpful suggestion. We spend 2 weeks in Lanka, From Colombo to Tricomalee to Morale to Galle. Precious memory in such beautiful country." },
    { rating: 5, comment: "If you want someone to show you Sri Lanka who is funny, knowledgeable, and personable, then you want Ruwan. He made our visit to Sri Lanka a most memorable experience. We were very very comfortable exploring the country with him. We felt like we had made a new friend. He was great. And Sri Lanka is an enchanted place to visit. Someday we hope to return." },
    { rating: 4, comment: "In November 2022 me & my husband, we visited Sri Lanka. We made a tour around the whole island, and we had a truly wonderful time. Sri Lanka is amazing, full of natural and historical wonders and the people are beautiful and kind. We had a private driver for the o make our vacation an unforgettable and stunning experience. His car is well-kept and very comfortable. We had a truly wonderful time with Ruwan who took us to amazing places in a safe, comfortable, and joyful way. Ruwan's phone number is +94776187195" },
    { rating: 5, comment: "Ruwan is one of the best driver and guide I've had in Sri Lanka. His communication is very good and is very eager to share as much information as possible. He is always on time and I strongly recommend booking the service with him." },
    { rating: 4, comment: "What a wonderful time I had with Ruwan. I was a solo traveler. He took me to amazing places. He was smart respectful and fun. We laughed so much. He is a gem." },
    { rating: 5, comment: "Thanks to our tour driver Ruwan, who made our 4-days family journey safe, comfortable and full of joy. We went from Weligama to Yala park, then Ella, and Kandy and then returned to the shore. Ruwan have shown us the real beauty of the island, told interesting stories and facts about culture, nature along the way, helped to choose (or even find) the best fruits and food. He was always on time, with washed car, always polite and friendly." },
    { rating: 4, comment: "We was on Tour with Anton from Negombo to Willpattu Nationalpark to Dambulla. He was a very careful and helpful driver, who can answer all our questions. Highly recommended!!" },
    { rating: 5, comment: "Ruwan sanjeewa.was our appointed driver from aggressor lodge. He was an exception driver and very eager to please" },
    { rating: 4, comment: "I enjoyed the ride. Friendly driver.returned to the shore. Ruwan have shown us the real beauty of the island, told interesting stories and f" },
    { rating: 5, comment: "Great experience with the service. driver Ruwan, who made our 4-days family journey safe, comfortable and full of joy. We went from Weligama to Yala park, then Ella, and Kandy and then returned to the shore. Ruwan have shown us the real beauty of the island, told interesting stories and facts about culture, nature along the way, helped to choose (or even find) the best" },
    { rating: 4, comment: "I enjoyed the ride. Friendly driver. and full of joy. We went from Weligama to Yala park, then Ella, and Kandy and then returned to the shore. Ruwan have shown us the real beauty of the island, told interesting stories " },
    { rating: 5, comment: "Great experience with the service.and Kandy and then returned to the shore. Ruwan have shown us the real beauty of the island, told interesting stories and facts about culture, nature along the way, helped to choose (or even find) the best" },
    { rating: 4, comment: "I enjoyed the ride. Friendly driver. and Kandy and then returned to the shore. Ruwan have shown us the real beauty of the island, told interesting stories and" },
  ];

  return (
    <div className="flex items-center justify-center my-10 ">
      <div className="bg-gray-100 rounded-lg shadow-md border p-4 w-[70%]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">User Reviews</h2>       
        {dummyReviews.map((review, index) => (
          <Review key={index} rating={review.rating} comment={review.comment} />
        ))}
      </div>
    </div>
  );
}

export default UserReviews;
