import React, { useEffect, useState } from "react";
import { Library, Edit, Trash2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyStories() {
  const [stories, setStories] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const storedData = sessionStorage.getItem("user");
        let userId = "";
        if (storedData) {
          const userData = JSON.parse(storedData);
          userId = userData.id;
        }

        const response = await axios.get("http://localhost:3000/en/getlikedstories", {
          params: { id: userId }, 
        });

        setStories(response.data); 
      } catch (err) {
        alert(error.response.data.message);
        setError("Failed to fetch stories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const handledislike = async (storyId) => {
    try {
      const response = await axios.post("http://localhost:3000/en/dislike", { id: storyId });
      alert(response.data.message);

      setStories((prevStories) => prevStories.filter((story) => story._id !== storyId));
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  if (loading) return <p>Loading stories...</p>; 
  if (error) return <p>{error}</p>; 

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <Library className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">My Stories</h1>
      </div>

      <div className="space-y-6">
        {stories.length > 0 ? (
          stories.map((story) => (
            <div key={story._id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {story.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    Genre: {story.genre}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition duration-200">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition duration-200"
                    onClick={() => handledislike(story._id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">You haven't liked any stories yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyStories;
