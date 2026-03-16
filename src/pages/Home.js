import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery || category;
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}&category=${encodeURIComponent(category)}`);
    }
  };

  // Enhanced categories with proper images
  const categories = [
    { name: 'Restaurants', icon: 'fas fa-utensils', count: '2,500+', color: '#ff6b35', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop' },
    { name: 'Doctors', icon: 'fas fa-user-md', count: '1,800+', color: '#8e44ad', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop' },
    { name: 'Hotels', icon: 'fas fa-bed', count: '1,200+', color: '#3498db', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop' },
    { name: 'Auto Care', icon: 'fas fa-car', count: '1,500+', color: '#e74c3c', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop' },
    { name: 'Beauty & Spa', icon: 'fas fa-spa', count: '900+', color: '#f39c12', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=300&h=200&fit=crop' },
    { name: 'Real Estate', icon: 'fas fa-home', count: '1,100+', color: '#27ae60', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop' },
    { name: 'Electronics', icon: 'fas fa-tv', count: '800+', color: '#9b59b6', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop' },
    { name: 'Education', icon: 'fas fa-graduation-cap', count: '600+', color: '#34495e', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop' },
    { name: 'Hospital', icon: 'fas fa-hospital', count: '450+', color: '#e67e22', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=200&fit=crop' },
    { name: 'Shopping', icon: 'fas fa-shopping-bag', count: '2,000+', color: '#1abc9c', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop' },
    { name: 'Photography', icon: 'fas fa-camera', count: '350+', color: '#95a5a6', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop' },
    { name: 'Jewellers', icon: 'fas fa-gem', count: '280+', color: '#f1c40f', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop' }
  ];

  const popularSearches = [
    'Pizza', 'Dentist', 'Plumber', 'Gym', 'Salon', 'Pharmacy', 'Taxi', 'Hotel',
    'Restaurant', 'Doctor', 'Hospital', 'Clinic', 'Auto Repair', 'Beauty Parlour'
  ];

  const trendingBusinesses = [
    {
      id: 1,
      name: "Mario's Italian Restaurant",
      category: "Restaurant",
      rating: 4.5,
      reviews: 234,
      address: "123 Main St, Downtown",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
      isSponsored: true,
      tags: ["Italian", "Pizza", "Pasta"],
      phone: "+91-9451834279"
    },
    {
      id: 2,
      name: "City Hospital & Medical Center",
      category: "Hospital",
      rating: 4.2,
      reviews: 156,
      address: "456 Health Ave, Medical District",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop",
      isSponsored: false,
      tags: ["Emergency", "General Medicine", "Surgery"],
      phone: "+91-8009822024"
    },
    {
      id: 3,
      name: "Luxury Spa & Wellness Center",
      category: "Beauty & Spa",
      rating: 4.8,
      reviews: 312,
      address: "321 Wellness Blvd, Uptown",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop",
      isSponsored: true,
      tags: ["Massage", "Facial", "Wellness"],
      phone: "+91-9451834279"
    },
    {
      id: 4,
      name: "Tech Solutions & Electronics",
      category: "Electronics",
      rating: 4.3,
      reviews: 89,
      address: "789 Tech Park, IT District",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      isSponsored: false,
      tags: ["Electronics", "Gadgets", "Repair"],
      phone: "+91-8009822024"
    }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/search?q=${encodeURIComponent(categoryName)}&category=${encodeURIComponent(categoryName)}`);
  };

  const handleBusinessClick = (businessId) => {
    navigate(`/business/${businessId}`);
  };

  return (
    <div className="vd-home">
      {/* Hero Section with Background Image */}
      <section className="vd-hero">
        <div className="vd-hero-bg"></div>
        <div className="vd-hero-overlay"></div>
        <div className="vd-hero-container">
          <div className="vd-hero-content">
            <h1 className="vd-hero-title">Find Local Business Near You</h1>
            <p className="vd-hero-subtitle">5,000+ users are consuming our services</p>
            
            <form onSubmit={handleSearch} className="vd-search-form">
              <div className="vd-search-container">
                <div className="vd-search-row">
                  <input
                    type="text"
                    placeholder="Search for businesses, services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="vd-search-input main-search"
                  />
                  <button type="submit" className="vd-search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="vd-search-filters">
                  <input
                    type="text"
                    placeholder="Enter your city"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="vd-filter-input"
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="vd-filter-select"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat, index) => (
                      <option key={index} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </form>

            <div className="vd-popular-searches">
              <span className="vd-popular-label">Popular:</span>
              {popularSearches.slice(0, 8).map((search, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(search);
                    navigate(`/search?q=${encodeURIComponent(search)}&location=${encodeURIComponent(location)}`);
                  }}
                  className="vd-popular-tag"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="vd-categories">
        <div className="vd-container">
          <h2 className="vd-section-title">Browse by Category</h2>
          <div className="vd-categories-grid">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="vd-category-card" 
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="vd-category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="vd-category-overlay">
                    <div className="vd-category-icon" style={{ backgroundColor: category.color }}>
                      <i className={category.icon}></i>
                    </div>
                  </div>
                </div>
                <div className="vd-category-info">
                  <h4>{category.name}</h4>
                  <span>{category.count} businesses</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Businesses */}
      <section className="vd-trending">
        <div className="vd-container">
          <div className="vd-section-header">
            <h2 className="vd-section-title">Trending Businesses</h2>
            <button className="vd-view-all" onClick={() => navigate('/search')}>
              View All <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          
          <div className="vd-business-grid">
            {trendingBusinesses.map((business) => (
              <div 
                key={business.id} 
                className="vd-business-card"
                onClick={() => handleBusinessClick(business.id)}
              >
                {business.isSponsored && <div className="vd-sponsored-badge">Sponsored</div>}
                <div className="vd-business-image">
                  <img src={business.image} alt={business.name} />
                  <div className="vd-business-overlay">
                    <div className="vd-business-actions">
                      <button className="vd-action-btn call" onClick={(e) => {
                        e.stopPropagation();
                        window.open(`tel:${business.phone}`);
                      }}>
                        <i className="fas fa-phone"></i>
                      </button>
                      <button className="vd-action-btn direction" onClick={(e) => {
                        e.stopPropagation();
                        // Add directions functionality
                      }}>
                        <i className="fas fa-directions"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="vd-business-info">
                  <h3>{business.name}</h3>
                  <div className="vd-business-rating">
                    <div className="vd-stars">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < Math.floor(business.rating) ? 'filled' : ''}`}></i>
                      ))}
                    </div>
                    <span>{business.rating} ({business.reviews} reviews)</span>
                  </div>
                  <p className="vd-business-address">
                    <i className="fas fa-map-marker-alt"></i> {business.address}
                  </p>
                  <div className="vd-business-tags">
                    {business.tags.map((tag, index) => (
                      <span key={index} className="vd-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="vd-services">
        <div className="vd-container">
          <h2 className="vd-section-title">Why Choose VDarpan?</h2>
          <div className="vd-services-grid">
            <div className="vd-service-card">
              <div className="vd-service-icon">
                <i className="fas fa-search-location"></i>
              </div>
              <h3>Local Search</h3>
              <p>Find businesses and services in your area with accurate location data and contact information.</p>
            </div>
            <div className="vd-service-card">
              <div className="vd-service-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Reviews & Ratings</h3>
              <p>Read genuine reviews and ratings from real customers to make informed decisions.</p>
            </div>
            <div className="vd-service-card">
              <div className="vd-service-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Direct Contact</h3>
              <p>Get complete contact information including phone numbers, addresses, and business hours.</p>
            </div>
            <div className="vd-service-card">
              <div className="vd-service-icon">
                <i className="fas fa-tags"></i>
              </div>
              <h3>Best Deals</h3>
              <p>Discover exclusive offers and deals from local businesses in your area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="vd-stats">
        <div className="vd-stats-bg"></div>
        <div className="vd-container">
          <div className="vd-stats-grid">
            <div className="vd-stat-item">
              <div className="vd-stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="vd-stat-number">5,000+</div>
              <div className="vd-stat-label">Active Users</div>
            </div>
            <div className="vd-stat-item">
              <div className="vd-stat-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="vd-stat-number">10,000+</div>
              <div className="vd-stat-label">Listed Businesses</div>
            </div>
            <div className="vd-stat-item">
              <div className="vd-stat-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <div className="vd-stat-number">50+</div>
              <div className="vd-stat-label">Cities Covered</div>
            </div>
            <div className="vd-stat-item">
              <div className="vd-stat-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="vd-stat-number">24/7</div>
              <div className="vd-stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="vd-newsletter">
        <div className="vd-container">
          <div className="vd-newsletter-content">
            <div className="vd-newsletter-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Stay Updated with VDarpan</h3>
            <p>Sign up to receive email updates about new businesses and exclusive deals in your area.</p>
            <form className="vd-newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="vd-newsletter-input"
                required
              />
              <button type="submit" className="vd-newsletter-btn">
                Subscribe <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;