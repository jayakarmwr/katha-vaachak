import React, { useState } from 'react';
import { PenTool, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CreateStory() {
  const [story, setStory] = useState({
    genre: '',
    title: '',
    plot: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the StoryDisplay page with story data
    navigate('/story-display', { state: { story } });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="flex items-center space-x-4 mb-8">
          <PenTool className="h-8 w-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">Create Your Story</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Genre Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Genre
            </label>
            <input
              type="text"
              value={story.genre}
              onChange={(e) => setStory({ ...story, genre: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter the genre of your story"
              required
            />
          </div>

          {/* Story Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Story Title
            </label>
            <input
              type="text"
              value={story.title}
              onChange={(e) => setStory({ ...story, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your story title"
              required
            />
          </div>

          {/* Story Plot Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Story Plot
            </label>
            <textarea
              value={story.plot}
              onChange={(e) => setStory({ ...story, plot: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe your story plot"
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            <Save className="h-5 w-5" />
            <span>Generate Story</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStory;