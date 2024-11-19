import React from 'react';
import { History, Calendar, Clock } from 'lucide-react';
import './StoryHistory.css';
import Navbar from './Navbar';

// Mock data - replace with actual data from your backend
const mockHistory = [
  {
    id: 1,
    title: "The Lost Kingdom",
    date: "2024-03-10",
    duration: "45 minutes",
    progress: "Completed chapter 1"
  },
  {
    id: 2,
    title: "Stellar Dreams",
    date: "2024-03-09",
    duration: "30 minutes",
    progress: "Character development"
  }
];

function StoryHistory() {
  return (
    <div>
      <Navbar/>
    <div className="story-history-container">
      <div className="story-history-header">
        <History className="story-history-icon" />
        <h1 className="story-history-title">Story History</h1>
      </div>

      <div className="story-history-card">
        <div className="story-history-content">
          <h2 className="story-history-subtitle">Recent Writing Sessions</h2>

          <div className="story-history-sessions">
            {mockHistory.map((session) => (
              <div key={session.id} className="story-history-session">
                <div className="session-details">
                  <h3 className="session-title">{session.title}</h3>
                  <div className="session-meta">
                    <div className="session-meta-item">
                      <Calendar className="meta-icon" />
                      <span>{session.date}</span>
                    </div>
                    <div className="session-meta-item">
                      <Clock className="meta-icon" />
                      <span>{session.duration}</span>
                    </div>
                  </div>
                  <p className="session-progress">{session.progress}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {mockHistory.length === 0 && (
        <div className="story-history-empty">
          <p>No writing sessions recorded yet.</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default StoryHistory;
