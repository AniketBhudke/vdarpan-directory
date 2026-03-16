import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Vasundhara Manav Kalyan Sanstha</h1>
          <p className="hero-subtitle">Dedicated to human welfare and social development</p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('about')} className="btn btn-primary">
              Learn More
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;