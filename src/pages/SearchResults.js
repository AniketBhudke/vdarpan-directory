import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const location = searchParams.get('location') || '';
  
  const [sortBy, setSortBy] = useState('relevance');
  const [filterRating, setFilterRating] = useState('all');

  // Mock data - in real app, this would come from API
  const mockResults = [
    {
      id: 1,
      name: "Mario's Italian Restaurant",
      category: "Restaurant",
      rating: 4.5,
      reviews: 234,
      address: "123 Main St, Downtown",
      phone: "+1 234-567-8900",
      image: "https://via.placeholder.com/300x200",
      distance: "0.5 km",
      isOpen: true,
      tags: ["Italian", "Pizza", "Pasta"],
      price: "$$"
    },
    {
      id: 2,
      name: "City Hospital",
      category: "Hospital",
      rating: 4.2,
      reviews: 156,
      address: "456 Health Ave, Medical District",
      phone: "+1 234-567-8901",
      image: "https://via.placeholder.com/300x200",
      distance: "1.2 km",
      isOpen: true,
      tags: ["Emergency", "General Medicine", "Surgery"],
      price: "$$$"
    },
    {
      id: 3,
      name: "Quick Fix Auto Repair",
      category: "Auto Care",
      rating: 4.7,
      reviews: 89,
      address: "789 Service Rd, Industrial Area",
      phone: "+1 234-567-8902",
      image: "https://via.placeholder.com/300x200",
      distance: "2.1 km",
      isOpen: false,
      tags: ["Car Repair", "Oil Change", "Tires"],
      price: "$$"
    },
    {
      id: 4,
      name: "Luxury Spa & Wellness",
      category: "Beauty & Spa",
      rating: 4.8,
      reviews: 312,
      address: "321 Wellness Blvd, Uptown",
      phone: "+1 234-567-8903",
      image: "https://via.placeholder.com/300x200",
      distance: "1.8 km",
      isOpen: true,
      tags: ["Massage", "Facial", "Wellness"],
      price: "$$$"
    }
  ];

  const filteredResults = mockResults.filter(business => {
    const matchesQuery = business.name.toLowerCase().includes(query.toLowerCase()) ||
                        business.category.toLowerCase().includes(query.toLowerCase()) ||
                        business.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    
    const matchesRating = filterRating === 'all' || business.rating >= parseFloat(filterRating);
    
    return matchesQuery && matchesRating;
  });

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
        return parseFloat(a.distance) - parseFloat(b.distance);
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="search-results">
      <div className="container">
        <div className="search-header">
          <h1>Search Results for "{query}"</h1>
          {location && <p>in {location}</p>}
          <p className="results-count">{sortedResults.length} results found</p>
        </div>

        <div className="search-filters">
          <div className="filter-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="relevance">Relevance</option>
              <option value="rating">Rating</option>
              <option value="distance">Distance</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Rating:</label>
            <select value={filterRating} onChange={(e) => setFilterRating(e.target.value)}>
              <option value="all">All Ratings</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
            </select>
          </div>
        </div>

        <div className="results-container">
          {sortedResults.length === 0 ? (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No results found</h3>
              <p>Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className="results-list">
              {sortedResults.map((business) => (
                <div key={business.id} className="business-card" onClick={() => navigate(`/business/${business.id}`)}>
                  <div className="business-image">
                    <img src={business.image} alt={business.name} />
                    <div className="business-status">
                      <span className={`status ${business.isOpen ? 'open' : 'closed'}`}>
                        {business.isOpen ? 'Open' : 'Closed'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="business-info">
                    <div className="business-header">
                      <h3>{business.name}</h3>
                      <span className="business-price">{business.price}</span>
                    </div>
                    
                    <div className="business-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star ${i < Math.floor(business.rating) ? 'filled' : ''}`}></i>
                        ))}
                      </div>
                      <span className="rating-text">{business.rating} ({business.reviews} reviews)</span>
                    </div>
                    
                    <p className="business-category">{business.category}</p>
                    <p className="business-address">
                      <i className="fas fa-map-marker-alt"></i> {business.address}
                    </p>
                    <p className="business-distance">
                      <i className="fas fa-route"></i> {business.distance} away
                    </p>
                    
                    <div className="business-tags">
                      {business.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="business-actions">
                      <button className="action-btn call-btn">
                        <i className="fas fa-phone"></i> Call
                      </button>
                      <button className="action-btn direction-btn">
                        <i className="fas fa-directions"></i> Directions
                      </button>
                      <button className="action-btn save-btn">
                        <i className="fas fa-bookmark"></i> Save
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;