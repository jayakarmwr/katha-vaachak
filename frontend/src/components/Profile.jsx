import React from 'react';
import './Profile.css';
import { User, Mail, BookOpen, Clock, Calendar, Award } from 'lucide-react';
import Navbar from './Navbar';

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          {/* Header */}
          <div className="profile-header">
            <div className="flex items-center space-x-4">
              <div className="profile-icon-container">
                <User className="stat-icon" />
              </div>
              <div>
                <h1 className="profile-name">FLORENCE</h1>
                <div className="profile-email">
                  <Mail className="stat-icon" />
                  <span>florence@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="space-y-6">
              <div className="stat-item">
                <BookOpen className="stat-icon" />
                <div>
                  <p className="stat-label">Stories Created</p>
                  <p className="stat-value">10</p> {/* Placeholder value */}
                </div>
              </div>

              <div className="stat-item">
                <Clock className="stat-icon" />
                <div>
                  <p className="stat-label">Total Writing Time</p>
                  <p className="stat-value">15 hours</p> {/* Placeholder value */}
                </div>
              </div>

              <div className="stat-item">
                <Calendar className="stat-icon" />
                <div>
                  <p className="stat-label">Member Since</p>
                  <p className="stat-value">January 2023</p> {/* Placeholder value */}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="achievements-container">
              <div className="achievements-header">
                <Award className="stat-icon" />
                <h2>Achievements</h2>
              </div>
              <ul className="achievement-list">
                <li className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span className="achievement-text">Published 5 stories</span>
                </li>
                <li className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span className="achievement-text">Reached 100 followers</span>
                </li>
                <li className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span className="achievement-text">Won Best Story Award</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
