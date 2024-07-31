import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const Username = localStorage.getItem('Username');
  const baseUrl = "https://ride-share-monir.onrender.com";
  // console.log(Username);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${baseUrl}/comment/`);
      setComments(response.data.slice(-3)); // Get the last 3 comments
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const commentData = {
      text: newComment,
      user: Username ? Username : 'Anonymous',
    };

    try {
      await axios.post(`${baseUrl}/comment/`, commentData);
      setNewComment('');
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="comment-section bg-gray-100 p-4 rounded-lg shadow-md py-12 px-6 md:py-20 md:px-24">
      <h2 className="text-2xl font-bold mb-4 text-center">Last Comments</h2>
      <ul className="mb-4">
        {comments.map((comment, index) => (
          <li key={index} className="mb-2 bg-white rounded-xl p-4">
            <strong className="font-semibold">{comment.user}</strong>: {comment.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="comment-form flex flex-col md:flex-row md:space-x-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 py-2 px-4 mb-4 md:mb-0 border rounded-md w-full md:w-1/2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
