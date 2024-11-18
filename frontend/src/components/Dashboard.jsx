import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Library, History, Sparkles } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 mb-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome back, {user?.name}!</h1>
        <p className="text-lg opacity-90">Ready to craft your next masterpiece?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/create-story" className="dashboard-card">
          <div className="p-6">
            <PenTool className="h-12 w-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Create New Story</h2>
            <p className="text-gray-600">Start crafting your next creative story with our guided tools.</p>
          </div>
        </Link>

        <Link to="/my-stories" className="dashboard-card">
          <div className="p-6">
            <Library className="h-12 w-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">My Stories</h2>
            <p className="text-gray-600">Access your collection of saved stories and drafts.</p>
          </div>
        </Link>

        <Link to="/story-history" className="dashboard-card">
          <div className="p-6">
            <History className="h-12 w-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Story History</h2>
            <p className="text-gray-600">Review your past story sessions and writing journey.</p>
          </div>
        </Link>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Sparkles className="h-6 w-6 text-yellow-500" />
          <h2 className="text-xl font-bold text-gray-800">Writing Inspiration</h2>
        </div>
        <p className="text-gray-600">
          "The first draft is just you telling yourself the story." - Terry Pratchett
        </p>
      </div>
    </div>
  );
}

export default Dashboard;