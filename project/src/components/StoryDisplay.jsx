import React from 'react';
import { useLocation } from 'react-router-dom';

function StoryDisplay() {
  const location = useLocation();
  const story = location.state?.story;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Generated Story</h1>

        {/* Story Inputs Overview */}
        <div className="mb-6">
          <p><strong>Genre:</strong> {story?.genre}</p>
          <p><strong>Title:</strong> {story?.title}</p>
          <p><strong>Plot:</strong> {story?.plot}</p>
        </div>

        {/* Empty Story Box */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Generated Story
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={10}
            placeholder="Your story will be generated here..."
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default StoryDisplay;