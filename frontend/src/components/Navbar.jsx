import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const navigate=useNavigate();
  const handleLogout = () => {
   
    navigate('/login'); 
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
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
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;