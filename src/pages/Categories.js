import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Restaurants',
      icon: 'fas fa-utensils',
      count: '2,500+',
      subcategories: ['Pizza', 'Chinese', 'Italian', 'Fast Food', 'Fine Dining', 'Cafes']
    },
    {
      name: 'Hotels & Travel',
      icon: 'fas fa-bed',
      count: '1,200+',
      subcategories: ['Hotels', 'Resorts', 'Travel Agencies', 'Car Rentals', 'Airlines', 'Tour Operators']
    },
    {
      name: 'Healthcare',
      icon: 'fas fa-hospital',
      count: '800+',
      subcategories: ['Hospitals', 'Clinics', 'Dentists', 'Pharmacies', 'Laboratories', 'Specialists']
    },
    {
      name: 'Auto Care',
      icon: 'fas fa-car',
      count: '1,500+',
      subcategories: ['Car Repair', 'Oil Change', 'Tires', 'Car Wash', 'Auto Parts', 'Dealerships']
    },
    {
      name: 'Beauty & Spa',
      icon: 'fas fa-spa',
      count: '900+',
      subcategories: ['Salons', 'Spas', 'Massage', 'Nail Care', 'Skincare', 'Barbershops']
    },
    {
      name: 'Education',
      icon: 'fas fa-graduation-cap',
      count: '600+',
      subcategories: ['Schools', 'Colleges', 'Tutoring', 'Training Centers', 'Libraries', 'Coaching']
    },
    {
      name: 'Real Estate',
      icon: 'fas fa-home',
      count: '1,100+',
      subcategories: ['Agents', 'Builders', 'Property Management', 'Rentals', 'Commercial', 'Residential']
    },
    {
      name: 'Shopping',
      icon: 'fas fa-shopping-bag',
      count: '2,000+',
      subcategories: ['Malls', 'Clothing', 'Electronics', 'Groceries', 'Books', 'Gifts']
    },
    {
      name: 'Home Services',
      icon: 'fas fa-tools',
      count: '1,300+',
      subcategories: ['Plumbing', 'Electrical', 'Cleaning', 'Pest Control', 'Landscaping', 'Repairs']
    },
    {
      name: 'Entertainment',
      icon: 'fas fa-film',
      count: '700+',
      subcategories: ['Movies', 'Theaters', 'Clubs', 'Events', 'Gaming', 'Sports']
    },
    {
      name: 'Fitness & Sports',
      icon: 'fas fa-dumbbell',
      count: '500+',
      subcategories: ['Gyms', 'Yoga', 'Sports Clubs', 'Personal Training', 'Dance', 'Martial Arts']
    },
    {
      name: 'Professional Services',
      icon: 'fas fa-briefcase',
      count: '1,000+',
      subcategories: ['Lawyers', 'Accountants', 'Consultants', 'Insurance', 'Banking', 'Marketing']
    }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/search?q=${encodeURIComponent(categoryName)}`);
  };

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/search?q=${encodeURIComponent(subcategory)}`);
  };

  return (
    <div className="categories-page">
      <div className="container">
        <div className="page-header">
          <h1>Browse All Categories</h1>
          <p>Find businesses and services across all categories</p>
        </div>

        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category-section">
              <div className="category-header" onClick={() => handleCategoryClick(category.name)}>
                <div className="category-info">
                  <div className="category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <div className="category-details">
                    <h3>{category.name}</h3>
                    <p>{category.count} businesses</p>
                  </div>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>
              
              <div className="subcategories">
                {category.subcategories.map((subcategory, subIndex) => (
                  <button
                    key={subIndex}
                    className="subcategory-tag"
                    onClick={() => handleSubcategoryClick(subcategory)}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="popular-categories">
          <h2>Most Popular Categories</h2>
          <div className="popular-grid">
            <div className="popular-item" onClick={() => handleCategoryClick('Restaurants')}>
              <i className="fas fa-utensils"></i>
              <span>Restaurants</span>
            </div>
            <div className="popular-item" onClick={() => handleCategoryClick('Healthcare')}>
              <i className="fas fa-hospital"></i>
              <span>Healthcare</span>
            </div>
            <div className="popular-item" onClick={() => handleCategoryClick('Auto Care')}>
              <i className="fas fa-car"></i>
              <span>Auto Care</span>
            </div>
            <div className="popular-item" onClick={() => handleCategoryClick('Beauty & Spa')}>
              <i className="fas fa-spa"></i>
              <span>Beauty & Spa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;