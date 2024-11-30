import React from "react";
import { Library, Edit, Trash2 } from "lucide-react";

// Mock data - replace with actual data from your backend
const mockStories = [
  {
    id: 1,
    title: "The Lost Kingdom",
    genre: "Fantasy",
    lastModified: "2024-03-10",
    excerpt: "In a realm forgotten by time...",
  },
  {
    id: 2,
    title: "Stellar Dreams",
    genre: "Science Fiction",
    lastModified: "2024-03-09",
    excerpt: "The colony ship drifted silently...",
  },
];

function MyStories() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <Library className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">My Stories</h1>
      </div>

      <div className="space-y-6">
        {mockStories.map((story) => (
          <div key={story.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  Genre: {story.genre} • Last modified: {story.lastModified}
                </p>
                <p className="text-gray-600">{story.excerpt}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition duration-200">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition duration-200">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mockStories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">You haven't created any stories yet.</p>
        </div>
      )}
    </div>
  );
}

export default MyStories;
