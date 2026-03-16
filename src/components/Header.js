import React, { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() || category) {
      const query = searchQuery || category;
      alert(`Searching for: ${query} in ${location || 'all locations'}`);
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
          <a href="#" className="vd-nav-logo">
            <div className="vd-logo">
              <span className="vd-logo-v">V</span>
              <span className="vd-logo-d">D</span>
            </div>
          </a>

          <ul className={`vd-nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="vd-nav-item">
              <a href="#" className="vd-nav-link">Home</a>
            </li>
            <li className="vd-nav-item">
              <a href="#" className="vd-nav-link">Free Listing</a>
            </li>
            <li className="vd-nav-item dropdown">
              <span className="vd-nav-link">Pages <i className="fas fa-chevron-down"></i></span>
            </li>
            <li className="vd-nav-item">
              <a href="#" className="vd-nav-link">Contact Us</a>
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
            <a href="#" className="vd-advertise-btn">Advertise</a>
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