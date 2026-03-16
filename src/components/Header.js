import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() || category) {
      const query = searchQuery || category;
      navigate(`/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}&category=${encodeURIComponent(category)}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    'Doctors', 'Personalities', 'Clinic', 'Marriage lawns', 'Real Estate', 
    'Automobile', 'Technical Institute', 'B2B', 'Clothes', 'Medicines', 
    'Restaurant', 'Electronics', 'Hospital', 'Photography', 'Jewellers', 
    'Schools', 'Colleges', 'Other'
  ];

  return (
    <header className="vd-header">
      <nav className="vd-navbar">
        <div className="vd-nav-container">
          <Link to="/" className="vd-nav-logo">
            <div className="vd-logo">
              <span className="vd-logo-v">V</span>
              <span className="vd-logo-d">D</span>
            </div>
          </Link>

          <ul className={`vd-nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="vd-nav-item">
              <Link to="/" className="vd-nav-link">Home</Link>
            </li>
            <li className="vd-nav-item">
              <Link to="/free-listing" className="vd-nav-link">Free Listing</Link>
            </li>
            <li className="vd-nav-item dropdown">
              <span className="vd-nav-link">Pages <i className="fas fa-chevron-down"></i></span>
            </li>
            <li className="vd-nav-item">
              <Link to="/contact" className="vd-nav-link">Contact Us</Link>
            </li>
          </ul>

          <div className="vd-nav-actions">
            <div className="vd-login-dropdown">
              <button 
                className="vd-login-btn"
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
              >
                Login / Register <i className="fas fa-chevron-down"></i>
              </button>
              {showLoginDropdown && (
                <div className="vd-dropdown-menu">
                  <a href="#" className="vd-dropdown-item">Vendor</a>
                  <a href="#" className="vd-dropdown-item">Admin</a>
                </div>
              )}
            </div>
            <Link to="/advertise" className="vd-advertise-btn">Advertise</Link>
          </div>

          <div className={`vd-nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="vd-bar"></span>
            <span className="vd-bar"></span>
            <span className="vd-bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;