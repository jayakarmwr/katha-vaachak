import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Library, History, Sparkles } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import './Dashboard.css'; // Import the custom CSS file
import Navbar from './Navbar';

function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    
    <div className="dashboard-container">
      
    <Navbar />  {/* Navbar displayed above header */}
      <header className="dashboard-header">
        <h1>Welcome back, [User's Name]!</h1>
        <p>Ready to craft your next masterpiece?</p>
      </header>

      {/* Main Content */}
      <div className="dashboard-main">
        <Link to="/create-story" className="dashboard-card">
          <div className="card-content">
            <PenTool className="icon" />
            <h2>Create New Story</h2>
            <p>Start crafting your next creative story with our guided tools.</p>
          </div>
        </Link>

        <Link to="/my-stories" className="dashboard-card">
          <div className="card-content">
            <Library className="icon" />
            <h2>My Stories</h2>
            <p>Access your collection of saved stories and drafts.</p>
          </div>
        </Link>

        <Link to="/story-history" className="dashboard-card">
          <div className="card-content">
            <History className="icon" />
            <h2>Story History</h2>
            <p>Review your past story sessions and writing journey.</p>
          </div>
        </Link>
      </div>

      {/* Creative Generate Story Section */}
      <div className="generate-story-section">
        <div className="story-banner">
          <Sparkles className="icon-large" />
          <h2>Unleash Your Creativity</h2>
        </div>
        <p className="quote">
          "Let your imagination run wild. Every story begins with a spark of creativity."
        </p>
        <Link to="/generate-story" className="generate-button">
          Generate Your Story
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
