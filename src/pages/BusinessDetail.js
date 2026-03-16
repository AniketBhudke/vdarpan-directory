import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BusinessDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  // Mock business data - in real app, fetch by ID
  // Mock business data - in real app, fetch by ID
  const business = {
    id: 1,
    name: "Mario's Italian Restaurant",
    category: "Restaurant",
    rating: 4.5,
    reviews: 234,
    address: "123 Main St, Downtown, City 12345",
    phone: "+1 234-567-8900",
    email: "info@mariosrestaurant.com",
    website: "www.mariosrestaurant.com",
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400"
    ],
    hours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    description: "Authentic Italian cuisine in the heart of downtown. Family-owned restaurant serving traditional recipes passed down through generations.",
    amenities: ["Parking Available", "WiFi", "Outdoor Seating", "Takeout", "Delivery", "Credit Cards Accepted"],
    tags: ["Italian", "Pizza", "Pasta", "Wine", "Family Friendly"],
    price: "$$",
    isOpen: true
  };

  const mockReviews = [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      date: "2024-03-10",
      comment: "Amazing food and great service! The pasta was perfectly cooked and the atmosphere is wonderful."
    },
    {
      id: 2,
      user: "Sarah M.",
      rating: 4,
      date: "2024-03-08",
      comment: "Good Italian food, reasonable prices. The pizza was delicious but service was a bit slow."
    },
    {
      id: 3,
      user: "Mike R.",
      rating: 5,
      date: "2024-03-05",
      comment: "Best Italian restaurant in town! Highly recommend the lasagna and tiramisu."
    }
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // In real app, submit review to API
    console.log('Review submitted:', newReview);
    setNewReview({ rating: 5, comment: '' });
    alert('Review submitted successfully!');
  };

  return (
    <div className="business-detail">
      <div className="container">
        {/* Business Header */}
        <div className="business-header">
          <div className="business-images">
            <div className="main-image">
              <img src={business.images[0]} alt={business.name} />
            </div>
            <div className="image-thumbnails">
              {business.images.slice(1).map((image, index) => (
                <img key={index} src={image} alt={`${business.name} ${index + 2}`} />
              ))}
            </div>
          </div>
          
          <div className="business-info">
            <div className="business-title">
              <h1>{business.name}</h1>
              <div className="business-status">
                <span className={`status ${business.isOpen ? 'open' : 'closed'}`}>
                  {business.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>
            </div>
            
            <div className="business-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas fa-star ${i < Math.floor(business.rating) ? 'filled' : ''}`}></i>
                ))}
              </div>
              <span className="rating-text">{business.rating} ({business.reviews} reviews)</span>
            </div>
            
            <p className="business-category">{business.category} • {business.price}</p>
            
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> {business.address}</p>
              <p><i className="fas fa-phone"></i> {business.phone}</p>
              <p><i className="fas fa-envelope"></i> {business.email}</p>
              <p><i className="fas fa-globe"></i> {business.website}</p>
            </div>
            
            <div className="action-buttons">
              <button className="btn btn-primary">
                <i className="fas fa-phone"></i> Call Now
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-directions"></i> Get Directions
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-bookmark"></i> Save
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-share"></i> Share
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="business-tabs">
          <button 
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({business.reviews})
          </button>
          <button 
            className={`tab ${activeTab === 'hours' ? 'active' : ''}`}
            onClick={() => setActiveTab('hours')}
          >
            Hours
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="description">
                <h3>About</h3>
                <p>{business.description}</p>
              </div>
              
              <div className="amenities">
                <h3>Amenities</h3>
                <div className="amenities-list">
                  {business.amenities.map((amenity, index) => (
                    <span key={index} className="amenity-tag">
                      <i className="fas fa-check"></i> {amenity}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="tags">
                <h3>Categories</h3>
                <div className="tags-list">
                  {business.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-content">
              <div className="reviews-summary">
                <div className="rating-breakdown">
                  <div className="overall-rating">
                    <span className="rating-number">{business.rating}</span>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < Math.floor(business.rating) ? 'filled' : ''}`}></i>
                      ))}
                    </div>
                    <p>{business.reviews} reviews</p>
                  </div>
                </div>
              </div>

              <div className="write-review">
                <h3>Write a Review</h3>
                <form onSubmit={handleReviewSubmit}>
                  <div className="rating-input">
                    <label>Rating:</label>
                    <div className="star-rating">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`fas fa-star ${i < newReview.rating ? 'filled' : ''}`}
                          onClick={() => setNewReview({...newReview, rating: i + 1})}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <textarea
                    placeholder="Share your experience..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-primary">Submit Review</button>
                </form>
              </div>

              <div className="reviews-list">
                {mockReviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <span className="reviewer-name">{review.user}</span>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star ${i < review.rating ? 'filled' : ''}`}></i>
                        ))}
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'hours' && (
            <div className="hours-content">
              <h3>Business Hours</h3>
              <div className="hours-list">
                {Object.entries(business.hours).map(([day, hours]) => (
                  <div key={day} className="hours-item">
                    <span className="day">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                    <span className="hours">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;