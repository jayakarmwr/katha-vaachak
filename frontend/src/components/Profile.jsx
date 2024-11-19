import React from 'react';
import './Profile.css';
import { useAuthStore } from '../store/authStore';
import { User, Mail, BookOpen, Clock, Calendar, Award } from 'lucide-react';
import Navbar from './Navbar';

function Profile() {
  const user = useAuthStore((state) => state.user);

  // Mock stats - replace with actual data from your backend

  return (
    <div>
      <Navbar/>
    <div className="profile-container">
      
      <div className="profile-card">
        {/* Header */}
        <div className="profile-header">
          <div className="flex items-center space-x-4">
            <div className="profile-icon-container">
              <User className="stat-icon" />
            </div>
            <div>
              <h1 className="profile-name">{user?.name}</h1>
              <div className="profile-email">
                <Mail className="stat-icon" />
                <span>{user?.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid md">
          <div className="space-y-6">
            <div className="stat-item">
              <BookOpen className="stat-icon" />
              <div>
                <p className="stat-label">Stories Created</p>
                <p className="stat-value">{stats.storiesCreated}</p>
              </div>
            </div>

            <div className="stat-item">
              <Clock className="stat-icon" />
              <div>
                <p className="stat-label">Total Writing Time</p>
                <p className="stat-value">{stats.totalWritingTime}</p>
              </div>
            </div>

            <div className="stat-item">
              <Calendar className="stat-icon" />
              <div>
                <p className="stat-label">Member Since</p>
                <p className="stat-value">{stats.memberSince}</p>
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
              {stats.achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span className="achievement-text">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
