import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
        <Link to="/" className="logo">
          Kathavaachak
        </Link>

        {/* Links Section */}
        <div className="nav-links">
          <Link to="/create-story">Create Story</Link>
          <Link to="/my-stories">My Stories</Link>
          <Link to="/story-history">History</Link>
          <Link to="/profile">Profile</Link>
          <button className="logout">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
