'use client'
import React, { useState, useEffect } from "react";

type Comment = {
  name: string;
  comment: string;
};

const CommentSection: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        if (Array.isArray(parsedComments)) {
          setComments(parsedComments);
        }
      } catch (error) {
        console.error("Error parsing comments from localStorage:", error);
      }
    }
  }, []);

  // Save comments to localStorage whenever the comments array changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      const newComment: Comment = { name, comment };
      setComments((prevComments) => [...prevComments, newComment]);
      setName("");
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800">Leave a Comment</h2>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Your Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here..."
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
        >
          Submit
        </button>
      </form>

      {/* Comments Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Comments ({comments.length})
        </h3>

        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <p className="text-sm font-semibold text-gray-700">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600 mt-1">{item.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
