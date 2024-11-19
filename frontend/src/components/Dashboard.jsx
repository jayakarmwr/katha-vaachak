import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Library, History, Sparkles } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="dashboard-container">
      <div className="dashboard-welcome">
        <h1>Welcome back, {user?.name}!</h1>
        <p>Ready to craft your next masterpiece?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/create-story" className="dashboard-card">
          <div className="p-6">
            <PenTool className="icon" />
            <h2>Create New Story</h2>
            <p>Start crafting your next creative story with our guided tools.</p>
          </div>
        </Link>

        <Link to="/my-stories" className="dashboard-card">
          <div className="p-6">
            <Library className="icon" />
            <h2>My Stories</h2>
            <p>Access your collection of saved stories and drafts.</p>
          </div>
        </Link>

        <Link to="/story-history" className="dashboard-card">
          <div className="p-6">
            <History className="icon" />
            <h2>Story History</h2>
            <p>Review your past story sessions and writing journey.</p>
          </div>
        </Link>
      </div>

      <div className="dashboard-inspiration">
        <h2>
          <Sparkles className="icon" />
          Writing Inspiration
        </h2>
        <p>"The first draft is just you telling yourself the story." - Terry Pratchett</p>
      </div>
    </div>
  );
}

export default Dashboard;
