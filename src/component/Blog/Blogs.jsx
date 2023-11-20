import React from "react";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Safe and Enjoyable Rideshare Travel",
      author: "John Doe",
      date: "October 20, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "The Future of Ridesharing: Trends to Watch",
      author: "Jane Smith",
      date: "September 15, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Blog Posts</h2>
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
          <p className="text-gray-600 text-sm">By {post.author} | {post.date}</p>
          <p className="text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
