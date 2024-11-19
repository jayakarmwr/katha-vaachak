import React, { useState } from 'react';
import { PenTool, Save } from 'lucide-react';
import Navbar from './Navbar.jsx';
import './CreateStory.css';

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
    console.log('Story created:', story);
  };

  return (
    <div>
      <Navbar />
    <div className="create-story-container">
      <div className="create-story-card">
        <div className="create-story-header">
          <PenTool className="h-8 w-8 text-indigo-600" />
          <h1>Create Your Story</h1>
        </div>

        <form onSubmit={handleSubmit} className="create-story-form">
          <div>
            <label>Story Title</label>
            <input
              type="text"
              value={story.title}
              onChange={(e) => setStory({ ...story, title: e.target.value })}
              placeholder="Enter your story title"
              required
            />
          </div>

          <div>
            <label>Main Characters</label>
            <textarea
              value={story.characters}
              onChange={(e) => setStory({ ...story, characters: e.target.value })}
              placeholder="Describe your main characters"
              rows={3}
              required
            />
          </div>

          <div className="create-story-grid">
            <div>
              <label>Location</label>
              <select
                value={story.location}
                onChange={(e) => setStory({ ...story, location: e.target.value })}
                required
              >
                <option value="">Select a location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Genre</label>
              <select
                value={story.genre}
                onChange={(e) => setStory({ ...story, genre: e.target.value })}
                required
              >
                <option value="">Select a genre</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Theme</label>
              <select
                value={story.theme}
                onChange={(e) => setStory({ ...story, theme: e.target.value })}
                required
              >
                <option value="">Select a theme</option>
                {themes.map((theme) => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="create-story-submit">
            <Save className="h-5 w-5" />
            <span>Save Story</span>
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreateStory;