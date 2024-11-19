import React from 'react';
import { Library, Edit, Trash2 } from 'lucide-react';
import './MyStories.css'; // Import the CSS file

// Mock data - replace with actual data from your backend
const mockStories = [
  {
    id: 1,
    title: "The Lost Kingdom",
    genre: "Fantasy",
    lastModified: "2024-03-10",
    excerpt: "In a realm forgotten by time..."
  },
  {
    id: 2,
    title: "Stellar Dreams",
    genre: "Science Fiction",
    lastModified: "2024-03-09",
    excerpt: "The colony ship drifted silently..."
  }
];

function MyStories() {
  return (
    <div className="my-stories-container">
      <div className="my-stories-header">
        <Library className="h-8 w-8 text-indigo-600" />
        <h1>My Stories</h1>
      </div>

      <div className="space-y-6">
        {mockStories.map((story) => (
          <div key={story.id} className="my-story-card">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="story-title">{story.title}</h2>
                <p className="story-details">
                  Genre: {story.genre} • Last modified: {story.lastModified}
                </p>
                <p className="story-excerpt">{story.excerpt}</p>
              </div>
              <div className="action-buttons">
                <button className="action-button edit">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="action-button delete">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mockStories.length === 0 && (
        <div className="empty-state">
          <p>You haven't created any stories yet.</p>
        </div>
      )}
    </div>
  );
}

export default MyStories;