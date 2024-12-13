import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // Import FontAwesome star icon

function CreateStory() {
  const [email, setEmail] = useState("");
  const [story, setStory] = useState({ genre: "", title: "", plot: "" });
  const [generatedStory, setGeneratedStory] = useState("");
  const [images, setImages] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storyError, setStoryError] = useState("");
  const [imageError, setImageError] = useState("");
  const [isStarred, setIsStarred] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = sessionStorage.getItem("user");
    if (storedData) {
      const userData = JSON.parse(storedData);
      setEmail(userData.email);
    }
  }, []);

  const extractTitleAndPlot = (fullStory) => {
    const lines = fullStory.split("\n").filter((line) => line.trim() !== "");
    const title = lines.length > 0 ? lines[0] : "Untitled";
    const plot = lines.slice(1).join("\n");
    return { title, plot };
  };

  const handleLikedStories = async () => {
    try {
      const titleToUse = story.title || extractTitleAndPlot(generatedStory).title;
      await axios.post("http://localhost:3000/en/setlike", {
        email,
        title: titleToUse,
      });
      setIsStarred(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStoryError("");
    setImageError("");

    try {
      const response = await axios.post(
        "https://1e53-34-124-189-128.ngrok-free.app/story",
        story,
        { headers: { "Content-Type": "application/json" }, timeout: 300000 }
      );

      if (!response.data.story) throw new Error("Failed to generate story.");
      setGeneratedStory(response.data.story);
      const prompts = response.data.prompts;
      setPrompts(prompts);

      if (!response.data.prompts || response.data.prompts.length === 0) {
        throw new Error("No prompts returned for image generation.");
      }

      const imageResponse = await axios.post(
        "http://127.0.0.1:5000/generate-images",
        { prompts },
        { headers: { "Content-Type": "application/json" } }
      );

      setImages(imageResponse.data.images || []);

      if (!imageResponse.data.images) throw new Error("No images generated.");

      const { title, plot } = story.title && story.plot
        ? { title: story.title, plot: story.plot }
        : extractTitleAndPlot(response.data.story);

      const saveData = {
        genre: story.genre,
        title,
        plot,
        generatedStory: response.data.story,
        email_id: email,
        images: imageResponse.data.images,
      };

      await axios.post("http://localhost:3000/en/save-story", saveData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Story and images saved successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      if (error.message.includes("story")) {
        setStoryError("Failed to generate the story. Please try again.");
      } else if (error.message.includes("image")) {
        setImageError("Failed to generate images. Please try again.");
      } else {
        setStoryError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Your Story</h1>

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
              Story Title (Optional)
            </label>
            <input
              type="text"
              value={story.title}
              onChange={(e) => setStory({ ...story, title: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your story title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Story Plot (Optional)
            </label>
            <textarea
              value={story.plot}
              onChange={(e) => setStory({ ...story, plot: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Describe your story plot"
              rows={4}
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

        {generatedStory && (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Generated Story</h2>
            <p className="text-gray-700 whitespace-pre-line">{generatedStory}</p>
            <button
              onClick={handleLikedStories}
              className="absolute top-4 right-4"
            >
              <FaStar
                size={24}
                className={isStarred ? "text-yellow-400" : "text-gray-400"}
              />
            </button>
          </div>
        )}

        {storyError && <p className="text-red-500 mt-4">{storyError}</p>}

        {images.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Story Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={`data:image/png;base64,${image}`}
                    alt={`Generated Story Image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {imageError && <p className="text-red-500 mt-4">{imageError}</p>}
      </div>
    </div>
  );
}

export default CreateStory;
