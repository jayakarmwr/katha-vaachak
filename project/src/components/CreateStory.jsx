import React, { useState } from 'react';
import { PenTool, Save } from 'lucide-react';

const genres = [
  "Fantasy", "Science Fiction", "Mystery", "Romance", "Adventure",
  "Horror", "Historical Fiction", "Contemporary", "Thriller"
];

const themes = [
  "Coming of Age", "Redemption", "Love and Loss", "Good vs Evil",
  "Man vs Nature", "Journey and Quest", "Power and Corruption",
  "Identity and Self-discovery", "Family and Relationships"
];

const locations = [
  "Medieval Castle", "Futuristic City", "Enchanted Forest",
  "Desert Oasis", "Space Station", "Underwater Kingdom",
  "Mountain Monastery", "Bustling Metropolis", "Ancient Ruins"
];

function CreateStory() {
  const [story, setStory] = useState({
    title: '',
    characters: '',
    location: '',
    genre: '',
    theme: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle story creation logic here
    console.log('Story created:', story);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="flex items-center space-x-4 mb-8">
          <PenTool className="h-8 w-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">Create Your Story</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Characters
            </label>
            <textarea
              value={story.characters}
              onChange={(e) => setStory({ ...story, characters: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe your main characters"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={story.location}
                onChange={(e) => setStory({ ...story, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select a location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Genre
              </label>
              <select
                value={story.genre}
                onChange={(e) => setStory({ ...story, genre: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select a genre</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <select
                value={story.theme}
                onChange={(e) => setStory({ ...story, theme: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select a theme</option>
                {themes.map((theme) => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            <Save className="h-5 w-5" />
            <span>Save Story</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStory;