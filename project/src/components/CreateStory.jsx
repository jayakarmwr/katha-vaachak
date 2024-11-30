import React, { useState } from "react";
import axios from "axios";

function CreateStory() {
  const [story, setStory] = useState({
    genre: "",
    title: "",
    plot: "",
  });
  const [generatedStory, setGeneratedStory] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://9d4d-34-124-183-144.ngrok-free.app/story",
        story,
        { headers: { "Content-Type": "application/json" }, timeout: 300000 }
      );

      setGeneratedStory(response.data.story);
      setImages(response.data.images); // Assuming backend returns images in data.images
    } catch (error) {
      console.error("Error generating story:", error);
      setGeneratedStory("Failed to generate the story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Create Your Story
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Genre
            </label>
            <input
              type="text"
              value={story.genre}
              onChange={(e) => setStory({ ...story, genre: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter the genre of your story"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Story Title
            </label>
            <input
              type="text"
              value={story.title}
              onChange={(e) => setStory({ ...story, title: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your story title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Story Plot
            </label>
            <textarea
              value={story.plot}
              onChange={(e) => setStory({ ...story, plot: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Describe your story plot"
              rows={4}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center space-x-2 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white py-3 px-6 rounded-lg transition duration-200`}
            >
              <span>{loading ? "Generating..." : "Generate Story"}</span>
            </button>
          </div>
        </form>

        {/* Display Generated Story */}
        {generatedStory && (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Generated Story
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {generatedStory}
            </p>
          </div>
        )}

        {/* Display Generated Images */}
        {images.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Story Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    // Corrected the src by adding backticks
                    src={`data:image/png;base64,${image}`} // assuming the backend returns the images in base64 format
                    alt={`Generated Story Image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateStory;
