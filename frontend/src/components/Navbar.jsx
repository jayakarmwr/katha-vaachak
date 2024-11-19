import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, History, Library, PenTool, User, LogOut } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">Kathavaachak</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/create-story" className="nav-link">
              <PenTool className="h-5 w-5" />
              <span>Create Story</span>
            </Link>
            <Link to="/my-stories" className="nav-link">
              <Library className="h-5 w-5" />
              <span>My Stories</span>
            </Link>
            <Link to="/story-history" className="nav-link">
              <History className="h-5 w-5" />
              <span>History</span>
            </Link>
            <Link to="/profile" className="nav-link">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
