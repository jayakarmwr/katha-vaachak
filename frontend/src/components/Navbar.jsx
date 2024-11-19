import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { BookOpen, History, Library, PenTool, User, LogOut } from 'lucide-react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Render nothing if the user is not authenticated
  if (!isAuthenticated) return null;

  return (
    <nav>
      <div className="container">
        {/* Logo and Title */}
        <Link to="/" className="flex">
          <BookOpen className="h-8 w-8 text-indigo-600" />
          <span>Kathavaachak</span>
        </Link>

        {/* Navigation Links */}
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
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;