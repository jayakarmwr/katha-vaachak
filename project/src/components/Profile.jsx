import React from 'react';
import { useAuthStore } from '../store/authStore';
import { User, Mail, BookOpen, Clock, Calendar, Award } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Profile() {
  const [details, setDetails] = useState(null); 
  const navigate = useNavigate();

 


  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");

    if (!storedUser) {
      // Redirect to login if no user data is stored
      navigate("/login");
      return;
    }

    const fetchUserDetails = async () => {
      try {
        const user = JSON.parse(storedUser); // Parse user details from session storage
        const response = await axios.get("http://localhost:3000/en/getuserdata", {
          params: { _id: user.id }, // Send the user ID to the backend
        });
        setDetails(response.data); // Store response data in state
      } catch (error) {
        console.error("Error fetching user details:", error);
        navigate("/login"); // Redirect to login on error
      }
    };

    fetchUserDetails();
  }, [navigate]);

  if (!details) {
    // Optionally display a loader or placeholder while fetching data
    return <div>Loading...</div>;
  }
  
  

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full">
              <User className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{details.username}</h1>
              <div className="flex items-center space-x-2 text-indigo-100">
                <Mail className="h-4 w-4" />
                <span>{details.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Stories Created</p>
                <p className="text-lg font-semibold text-gray-800">{details.storiesCreated}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Total Writing Time</p>
                <p className="text-lg font-semibold text-gray-800">{details.totalWritingTime}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="text-lg font-semibold text-gray-800">{details.memberSince}</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-overlay rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-800">Achievements</h2>
            </div>
            <ul className="space-y-3">
              {details.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;