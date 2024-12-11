import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateStory() {
  const [email, setEmail] = useState("");
  const [story, setStory] = useState({ genre: "", title: "", plot: "" });
  const [generatedStory, setGeneratedStory] = useState("");
  const [images, setImages] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storyError, setStoryError] = useState("");
  const [imageError, setImageError] = useState("");

  // Load email from session storage on component mount
  useEffect(() => {
    const storedData = sessionStorage.getItem('user');
    if (storedData) {
      const userData = JSON.parse(storedData);
      setEmail(userData.email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStoryError("");
    setImageError("");

    try {
      // Step 1: Generate the story
      const response = await axios.post(
        "https://bcac-34-125-74-10.ngrok-free.app/story",
        story,
        { headers: { "Content-Type": "application/json" }, timeout: 300000 }
       
      );

      if (!response.data.story) throw new Error("Failed to generate story.");
      setGeneratedStory(response.data.story);
      const prompts = response.data.prompts; // Extract prompts
      setPrompts(prompts);

      // Step 2: Generate the images using returned prompts
      if (!response.data.prompts || response.data.prompts.length === 0) {
        throw new Error("No prompts returned for image generation.");
      }

      const imageResponse = await axios.post(
        "http://127.0.0.1:5000/generate-images", // Update this to your Flask URL
        { prompts }, // Directly pass the extracted prompts
        { headers: { "Content-Type": "application/json" } }
      );
  
      setImages(imageResponse.data.images || []);
  

      if (!imageResponse.data.images) throw new Error("No images generated.");
      setImages(imageResponse.data.images);

      // Step 3: Save data to backend
      const saveData = {
        ...story,
        generatedStory: response.data.story,
        email_id: email,
        images: imageResponse.data.images
      };
      console.log(saveData);

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

        {/* Display Story or Error */}
        {generatedStory ? (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Generated Story
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {generatedStory}
            </p>
          </div>
        ) : storyError ? (
          <p className="text-red-500">{storyError}</p>
        ) : null}

        {/* Display Images or Error */}
        {images.length > 0 ? (
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
                    src={`data:image/png;base64,${image}`}
                    alt={`Generated Story Image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : imageError ? (
          <p className="text-red-500">{imageError}</p>
        ) : null}
      </div>
    </div>
  );
}

export default CreateStory;