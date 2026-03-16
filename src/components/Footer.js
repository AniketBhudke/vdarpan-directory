import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const popularCategories = [
    'Fitness', 'Banquet', 'Travel', 'Car Rents', 'Doctors', 'Electronics'
  ];

  const locations = [
    'Jaunpur', 'Varanasi', 'Uttar Pradesh'
  ];

  const importantLinks = [
    'Home', 'About', 'Contact Us', 'Uttar Pradesh Administration', 'Login'
  ];

  return (
    <footer className="vd-footer">
      <div className="vd-container">
        <div className="vd-footer-content">
          <div className="vd-footer-section">
            <div className="vd-footer-logo">
              <div className="vd-logo">
                <span className="vd-logo-v">V</span>
                <span className="vd-logo-d">D</span>
              </div>
            </div>
            <div className="vd-footer-contact">
              <p><i className="fas fa-phone"></i> 91-9451834279, 8009822024</p>
              <p className="vd-footer-org">Vasundhara Manav Kalyan Sanstha</p>
              <p className="vd-footer-powered">Powered By <i className="fas fa-heart"></i> GTL Software pvt ltd</p>
            </div>
          </div>
          
          <div className="vd-footer-section">
            <h4>Popular Categories</h4>
            <ul>
              {popularCategories.map((category, index) => (
                <li key={index}>
                  <Link to={`/search?q=${encodeURIComponent(category)}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="vd-footer-section">
            <h4>Location</h4>
            <ul>
              {locations.map((location, index) => (
                <li key={index}>
                  <Link to={`/search?location=${encodeURIComponent(location)}`}>{location}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="vd-footer-section">
            <h4>Important Links</h4>
            <ul>
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="vd-footer-social">
          <div className="vd-social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        
        <div className="vd-footer-bottom">
          <div className="vd-footer-links">
            <Link to="/terms">Terms & Condition</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;