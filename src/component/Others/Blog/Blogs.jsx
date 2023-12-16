import React, { useState } from 'react';
import postData from './postData';

const Blogs = () => {
  const [showMore, setShowMore] = useState([]);

  const toggleShowMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  return (
    <div className="flex justify-center items-center  mx-[30%]">
      <div className="posts">
        {postData.map((post, index) => (
          <div key={index} className="post bg-gray-200 p-4 my-8 rounded-md">
            <h2>{post.title}</h2>
            <p>
              {showMore[index]
                ? post.content
                : `${post.content.slice(0, 500)}...`}
            </p>
            {post.content.length > 50 && (
              <button
                className="see-more-btn text-blue-400"
                onClick={() => toggleShowMore(index)}
              >
                {showMore[index] ? 'See Less' : 'See More'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
